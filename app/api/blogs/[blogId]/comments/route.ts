import { moderateComment } from "@/src/lib/moderation/moderation";
import { sql } from "@/src/lib/neon";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await params;

    const comments = await sql`
        SELECT *
        FROM comments
        WHERE blog_id = ${Number(blogId)}
        ORDER BY created_at DESC
    `;

    return Response.json(comments);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  try {
    const { blogId } = await params;

    const body = await request.json();

    const { name, email, comment, localDateTime } = body;

    /*
     * ---------------------------------------------------------
     * 1. Basic validation
     * ---------------------------------------------------------
     */

    if (!name || !email || !comment) {
      return Response.json(
        {
          error: "Name, email, and comment are required",
        },
        {
          status: 400,
        }
      );
    }

    const blogIdNumber = Number(blogId);

    if (!Number.isInteger(blogIdNumber)) {
      return Response.json(
        {
          error: "Invalid blog ID",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ---------------------------------------------------------
     * 2. Clean input
     * ---------------------------------------------------------
     */

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanComment = String(comment).trim();

    /*
     * ---------------------------------------------------------
     * 3. Length validation
     * ---------------------------------------------------------
     */

    if (cleanName.length < 2 || cleanName.length > 100) {
      return Response.json(
        {
          error: "Name must be between 2 and 100 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanEmail.length > 254) {
      return Response.json(
        {
          error: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanComment.length < 2) {
      return Response.json(
        {
          error: "Comment is too short.",
        },
        {
          status: 400,
        }
      );
    }

    if (cleanComment.length > 2000) {
      return Response.json(
        {
          error: "Comment must be 2000 characters or less.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ---------------------------------------------------------
     * 4. AI MODERATION
     * ---------------------------------------------------------
     */

    let moderationResult;

    try {
      moderationResult = await moderateComment(cleanComment);
    } catch (moderationError) {
      console.error("Comment moderation failed:", moderationError);

      return Response.json(
        {
          error:
            "We couldn't verify your comment right now. Please try again.",
        },
        {
          status: 503,
        }
      );
    }

    /*
     * ---------------------------------------------------------
     * 5. Reject flagged comments
     * ---------------------------------------------------------
     */

    if (!moderationResult.allowed) {
      return Response.json(
        {
          error:
            "Your comment could not be posted because it does not meet our community guidelines.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ---------------------------------------------------------
     * 6. Insert approved comment
     * ---------------------------------------------------------
     */

    const [newComment] = await sql`
      INSERT INTO comments (
        blog_id,
        name,
        email,
        comment,
        created_at
      )
      VALUES (
        ${blogIdNumber},
        ${cleanName},
        ${cleanEmail},
        ${cleanComment},
        ${localDateTime ? new Date(localDateTime) : new Date()}
      )
      RETURNING *;
    `;

    return Response.json(newComment, {
      status: 201,
    });
  } catch (error) {
    console.error("POST comment error:", error);

    return Response.json(
      {
        error: "Unable to post comment. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}