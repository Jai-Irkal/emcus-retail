import { ContactTemplate } from "@/src/components/EmailTemplates/ContactTemplate";
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !email || !subject || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "info@emcus.co.in",
      to: ["EMCUS Technology <info@emcus.co.in>"],
      replyTo: email,
      subject: 'Contact Form Submission: ' + subject,
      react: ContactTemplate({ firstName, lastName, email, subject, message }),
    });

    if (error) {
      console.error("❌ Resend error:", JSON.stringify(error, null, 2));
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: any) {
    console.error("❌ Catch error:", error);
    return Response.json({ error: error?.message || "Unknown error" }, { status: 500 });
  }
}