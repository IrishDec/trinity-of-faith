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
    const form = await request.formData();

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const personSupportFor = String(
      form.get("personSupportFor") || ""
    ).trim();

    const supportType = String(form.get("supportType") || "").trim();
    const chosenChurch = String(form.get("chosenChurch") || "").trim();
    const message = String(form.get("message") || "").trim();

    const informationAccurate = form.get("informationAccurate") === "on";
    const contactConsent = form.get("contactConsent") === "on";
    const sendCopy = form.get("sendCopy") === "on";

    if (
      !name ||
      !phone ||
      !email ||
      !supportType ||
      !chosenChurch ||
      !message ||
      !informationAccurate ||
      !contactConsent
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const to = parishEmails[chosenChurch];

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
      subject: `Pastoral support request - ${supportType}`,
      text: `
PASTORAL SUPPORT REQUEST

Name: ${name}
Phone: ${phone}
Email: ${email}
Person support is for: ${personSupportFor || "Not provided"}

Type of support: ${supportType}
Parish office: ${chosenChurch}

MESSAGE

${message}

CONSENT

Information confirmed accurate: ${informationAccurate ? "Yes" : "No"}
Parish may make contact: ${contactConsent ? "Yes" : "No"}
      `.trim(),
    });

    if (sendCopy) {
      await resend.emails.send({
        from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
        to: email,
        subject: `Copy of your pastoral support request - ${supportType}`,
        text: `
Thank you for contacting Trinity of Faith.

Here is a copy of your pastoral support request.

Name: ${name}
Person support is for: ${personSupportFor || "Not provided"}
Type of support: ${supportType}
Parish office: ${chosenChurch}

Message:
${message}

The parish office will contact you regarding your request.

If you do not see a reply, please check your spam or junk folder.
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pastoral support error:", error);

    return NextResponse.json(
      { error: "Unable to send pastoral support request. Please try again." },
      { status: 500 }
    );
  }
}