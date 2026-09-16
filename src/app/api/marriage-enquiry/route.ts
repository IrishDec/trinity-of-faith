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

    const brideName = String(form.get("brideName") || "").trim();
    const bridePhone = String(form.get("bridePhone") || "").trim();
    const brideAddress = String(form.get("brideAddress") || "").trim();

    const groomName = String(form.get("groomName") || "").trim();
    const groomPhone = String(form.get("groomPhone") || "").trim();
    const groomAddress = String(form.get("groomAddress") || "").trim();

    const weddingDate = String(form.get("weddingDate") || "").trim();
    const contactEmail = String(form.get("contactEmail") || "").trim();
    const priestName = String(form.get("priestName") || "").trim();

    const chosenChurch = String(form.get("chosenChurch") || "").trim();
    const previousMarriage = String(form.get("previousMarriage") || "").trim();
    const bothCatholic = String(form.get("bothCatholic") || "").trim();
    const catholicDetails = String(form.get("catholicDetails") || "").trim();
    const civilResponsibility = String(
      form.get("civilResponsibility") || ""
    ).trim();

    const informationAccurate = form.get("informationAccurate") === "on";
    const provisionalConsent = form.get("provisionalConsent") === "on";
    const contactConsent = form.get("contactConsent") === "on";
    const sendCopy = form.get("sendCopy") === "on";

    if (
      !brideName ||
      !bridePhone ||
      !brideAddress ||
      !groomName ||
      !groomPhone ||
      !groomAddress ||
      !weddingDate ||
      !contactEmail ||
      !chosenChurch ||
      !previousMarriage ||
      !bothCatholic ||
      !civilResponsibility ||
      !informationAccurate ||
      !provisionalConsent ||
      !contactConsent
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (bothCatholic === "No" && !catholicDetails) {
      return NextResponse.json(
        { error: "Please provide details where both parties are not Catholic." },
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

    const supportingDocument = form.get("supportingDocument");

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    if (
      supportingDocument instanceof File &&
      supportingDocument.size > 0
    ) {
      attachments.push({
        filename: supportingDocument.name,
        content: Buffer.from(await supportingDocument.arrayBuffer()),
      });
    }

    await resend.emails.send({
      from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
      to,
      replyTo: contactEmail,
      subject: `Marriage enquiry - ${brideName} & ${groomName}`,
      ...(attachments.length > 0 ? { attachments } : {}),
      text: `
PROVISIONAL MARRIAGE BOOKING ENQUIRY

BRIDE DETAILS

Name: ${brideName}
Telephone / mobile: ${bridePhone}
Address: ${brideAddress}

GROOM DETAILS

Name: ${groomName}
Telephone / mobile: ${groomPhone}
Address: ${groomAddress}

BOOKING DETAILS

Requested wedding date: ${weddingDate}
Contact email: ${contactEmail}
Priest who has agreed to officiate: ${priestName || "Not provided"}
Chosen church: ${chosenChurch}

DECLARATION

Previously married: ${previousMarriage}
Both Catholic: ${bothCatholic}
${bothCatholic === "No" ? `Details: ${catholicDetails}` : ""}
Civil notification / registration responsibility accepted: ${civilResponsibility}

CONSENT

Information confirmed accurate: ${informationAccurate ? "Yes" : "No"}
Provisional booking understood: ${provisionalConsent ? "Yes" : "No"}
Parish may make contact: ${contactConsent ? "Yes" : "No"}

Supporting document attached: ${
        attachments.length > 0 ? supportingDocument instanceof File ? supportingDocument.name : "Yes" : "No"
      }
      `.trim(),
    });

    if (sendCopy) {
      await resend.emails.send({
        from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
        to: contactEmail,
        subject: `Copy of your marriage enquiry - ${brideName} & ${groomName}`,
        text: `
Thank you for contacting Trinity of Faith.

Here is a copy of your provisional marriage booking enquiry.

Bride: ${brideName}
Groom: ${groomName}
Requested wedding date: ${weddingDate}
Chosen church: ${chosenChurch}

This enquiry does not confirm the church booking. The parish office will contact you regarding availability and the next steps.

If you do not see a reply, please check your spam or junk folder.
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Marriage enquiry error:", error);

    return NextResponse.json(
      { error: "Unable to send marriage enquiry. Please try again." },
      { status: 500 }
    );
  }
}