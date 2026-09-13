import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const parishEmails: Record<string, string> = {
  Clonskeagh: "info@heiyudigital.com",
  Kilmacud: "info@heiyubuild.ie",
  "Mount Merrion": "declanobrien77@gmail.com",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const parish = String(body.parish || "").trim();
    const ministry = String(body.ministry || "").trim();
    const message = String(body.message || "").trim();
    const agreed = Boolean(body.agreed);

    if (!name || !email || !parish || !ministry || !agreed) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const to = parishEmails[parish];

    if (!to) {
      return NextResponse.json(
        { error: "Invalid parish selected." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Trinity of Faith Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Volunteer enquiry - ${ministry}`,
      text: `
Volunteer enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Parish: ${parish}
Area of interest: ${ministry}

Message:
${message || "No message provided."}

Consent:
The sender agreed that their details may be used by the parish office to respond to this enquiry.
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer enquiry error:", error);

    return NextResponse.json(
      { error: "Unable to send enquiry. Please try again." },
      { status: 500 }
    );
  }
}