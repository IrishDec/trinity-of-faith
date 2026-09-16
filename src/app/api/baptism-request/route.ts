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
    const sendCopy = form.get("sendCopy") === "on";

    const childSurname = String(form.get("childSurname") || "").trim();
    const childChristianNames = String(
      form.get("childChristianNames") || ""
    ).trim();
    const dateOfBirth = String(form.get("dateOfBirth") || "").trim();
    const parentsAddress = String(form.get("parentsAddress") || "").trim();

    const fatherSurname = String(form.get("fatherSurname") || "").trim();
    const fatherChristianName = String(
      form.get("fatherChristianName") || ""
    ).trim();
    const fatherReligion = String(form.get("fatherReligion") || "").trim();
    const fatherEmail = String(form.get("fatherEmail") || "").trim();

    const motherMaidenName = String(form.get("motherMaidenName") || "").trim();
    const motherChristianName = String(
      form.get("motherChristianName") || ""
    ).trim();
    const motherReligion = String(form.get("motherReligion") || "").trim();
    const motherEmail = String(form.get("motherEmail") || "").trim();

    const phone = String(form.get("phone") || "").trim();
    const mobile = String(form.get("mobile") || "").trim();

    const godfatherName = String(form.get("godfatherName") || "").trim();
    const godmotherName = String(form.get("godmotherName") || "").trim();

    const godfatherOver16 = form.get("godfatherOver16") === "on";
    const godfatherCatholicConfirmed =
      form.get("godfatherCatholicConfirmed") === "on";
    const godmotherOver16 = form.get("godmotherOver16") === "on";
    const godmotherCatholicConfirmed =
      form.get("godmotherCatholicConfirmed") === "on";

    const chosenChurch = String(form.get("chosenChurch") || "").trim();

    const informationAccurate = form.get("informationAccurate") === "on";
    const baptismRegisterConsent =
      form.get("baptismRegisterConsent") === "on";
    const permanentRecordConsent =
      form.get("permanentRecordConsent") === "on";
    const contactConsent = form.get("contactConsent") === "on";

    const newsletterConsent = form.get("newsletterConsent") === "on";
    const facebookConsent = form.get("facebookConsent") === "on";
    const futureEventsConsent = form.get("futureEventsConsent") === "on";

    const birthCertificate = form.get("birthCertificate");

    if (
      !childSurname ||
      !childChristianNames ||
      !dateOfBirth ||
      !parentsAddress ||
      !chosenChurch ||
      !informationAccurate ||
      !contactConsent
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!(birthCertificate instanceof File) || birthCertificate.size === 0) {
      return NextResponse.json(
        { error: "Please attach the child's birth certificate." },
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

    const birthCertificateBuffer = Buffer.from(
      await birthCertificate.arrayBuffer()
    );

    const replyTo = fatherEmail || motherEmail || undefined;

    await resend.emails.send({
      from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
      to,
      ...(replyTo ? { replyTo } : {}),
      subject: `Baptism request - ${childChristianNames} ${childSurname}`,
      attachments: [
        {
          filename: birthCertificate.name,
          content: birthCertificateBuffer,
        },
      ],
      text: `
BAPTISM REQUEST

CHILD DETAILS

Child's surname: ${childSurname}
Child's Christian names: ${childChristianNames}
Date of birth: ${dateOfBirth}
Address of parents: ${parentsAddress}

PARENT DETAILS

Father's surname: ${fatherSurname}
Father's Christian name: ${fatherChristianName}
Father's religion: ${fatherReligion}
Father's email: ${fatherEmail || "Not provided"}

Mother's maiden name: ${motherMaidenName}
Mother's Christian name: ${motherChristianName}
Mother's religion: ${motherReligion}
Mother's email: ${motherEmail || "Not provided"}

Phone number: ${phone}
Mobile number: ${mobile}

GODPARENT DETAILS

Godfather: ${godfatherName || "Not provided"}
Over 16: ${godfatherOver16 ? "Yes" : "No"}
Baptised Catholic and confirmed: ${
        godfatherCatholicConfirmed ? "Yes" : "No"
      }

Godmother: ${godmotherName || "Not provided"}
Over 16: ${godmotherOver16 ? "Yes" : "No"}
Baptised Catholic and confirmed: ${
        godmotherCatholicConfirmed ? "Yes" : "No"
      }

CHOSEN CHURCH

${chosenChurch}

CONSENT

Information confirmed accurate: ${informationAccurate ? "Yes" : "No"}
Use for Baptism registration: ${baptismRegisterConsent ? "Yes" : "No"}
Permanent Baptism Register understood: ${
        permanentRecordConsent ? "Yes" : "No"
      }
Parish may make contact: ${contactConsent ? "Yes" : "No"}

OPTIONAL PARISH CONSENT

Newsletter / website: ${newsletterConsent ? "Yes" : "No"}
Facebook: ${facebookConsent ? "Yes" : "No"}
Future parish events: ${futureEventsConsent ? "Yes" : "No"}

Birth certificate attached: ${birthCertificate.name}
      `.trim(),
    });
if (sendCopy) {
  const copyTo = fatherEmail || motherEmail;

  if (copyTo) {
    await resend.emails.send({
      from: "Trinity of Faith Website <forms@trinityoffaith.ie>",
      to: copyTo,
      subject: `Copy of your Baptism request - ${childChristianNames} ${childSurname}`,
      text: `
Thank you for contacting Trinity of Faith.

Here is a copy of the Baptism request you submitted.

Child: ${childChristianNames} ${childSurname}
Date of birth: ${dateOfBirth}
Chosen church: ${chosenChurch}

The parish office will contact you regarding your request.

If you do not see a reply, please check your spam or junk folder.
      `.trim(),
    });
  }
}
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Baptism request error:", error);

    return NextResponse.json(
      { error: "Unable to send Baptism request. Please try again." },
      { status: 500 }
    );
  }
}