import { sql } from "@/src/lib/neon";

export async function GET() {
    try {
        const comments = await sql`
            SELECT
                blog_id,
                COUNT(*) AS comment_count
            FROM comments
            GROUP BY blog_id
            ORDER BY blog_id;
        `;

        return Response.json(comments);
    } catch (error: any) {
        return Response.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}