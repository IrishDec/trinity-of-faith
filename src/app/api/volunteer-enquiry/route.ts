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
    const sendCopy = Boolean(body.sendCopy);

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
      from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
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

    if (sendCopy) {
      await resend.emails.send({
        from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
        to: email,
        subject: `Copy of your volunteer enquiry - ${ministry}`,
        text: `
Thank you for contacting Trinity of Faith.

Here is a copy of the volunteer enquiry you sent.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Parish: ${parish}
Area of interest: ${ministry}

Message:
${message || "No message provided."}

The parish office will respond to your enquiry directly.

If you do not see a reply, please check your spam or junk folder.
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer enquiry error:", error);

    return NextResponse.json(
      { error: "Unable to send enquiry. Please try again." },
      { status: 500 }
    );
  }
}