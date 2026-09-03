import { Resend } from "resend";
import { CareerTemplate } from "@/src/components/EmailTemplates/CareerTemplate";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const file = formData.get("resume") as File | null;

    if (!name || !email || !file) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // Convert file → base64 (Resend requirement)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { data, error } = await resend.emails.send({
      from: "EMCUS Careers <careers@emcus.co.in>",
      to: ["info@emcus.co.in"],
      replyTo: email,
      subject: `New Job Application - ${role || "General"}`,
      react: CareerTemplate({ name, email, role }),
      attachments: [
        {
          filename: file.name,
          content: buffer.toString("base64"),
        },
      ],
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error("❌ Apply mail error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}