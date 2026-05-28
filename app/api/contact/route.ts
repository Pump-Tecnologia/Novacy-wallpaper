import { NextRequest } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  serviceType?: unknown;
  location?: unknown;
  dimensions?: unknown;
  materialStatus?: unknown;
  materialDetails?: unknown;
  timeline?: unknown;
  photoLink?: unknown;
  message?: unknown;
  company?: unknown;
};

type ContactFields = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  dimensions: string;
  materialStatus: string;
  materialDetails: string;
  timeline: string;
  photoLink: string;
  message: string;
};

const requiredFields: Array<keyof ContactFields> = [
  "name",
  "email",
  "phone",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1200) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatRows(fields: ContactFields) {
  const rows: Array<[string, string]> = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Service", fields.serviceType || "Client did not provide this detail."],
    ["Location", fields.location || "Client did not provide this detail."],
    ["Dimensions", fields.dimensions || "Client did not provide this detail."],
    ["Material Status", fields.materialStatus || "Client did not provide this detail."],
    ["Material / Roll Details", fields.materialDetails || "Client did not provide this detail."],
    ["Timeline", fields.timeline || "Client did not provide this detail."],
    ["Photo Link", fields.photoLink || "Client did not provide this detail."],
    ["Message", fields.message || "Client did not provide this detail."],
  ];

  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#667085;font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:700;vertical-align:top;">${label}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#002e7d;font-size:15px;line-height:1.6;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
        </tr>
      `,
    )
    .join("");
}

function buildEmailHtml(fields: ContactFields) {
  return `
    <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:720px;margin:0 auto;padding:32px 20px;">
        <div style="background:#002e7d;padding:28px 32px;color:#ffffff;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#8bb8ff;font-weight:700;">NOVACY Website Lead</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;letter-spacing:.04em;text-transform:uppercase;">New Project Request</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;">
          <tbody>${formatRows(fields)}</tbody>
        </table>
        <p style="margin:18px 0 0;color:#667085;font-size:12px;line-height:1.6;">
          Reply directly to this email to contact ${escapeHtml(fields.name)}.
        </p>
      </div>
    </div>
  `;
}

function buildText(fields: ContactFields) {
  return [
    "New NOVACY project request",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Service: ${fields.serviceType || "Client did not provide this detail."}`,
    `Location: ${fields.location || "Client did not provide this detail."}`,
    `Dimensions: ${fields.dimensions || "Client did not provide this detail."}`,
    `Material Status: ${fields.materialStatus || "Client did not provide this detail."}`,
    `Material / Roll Details: ${fields.materialDetails || "Client did not provide this detail."}`,
    `Timeline: ${fields.timeline || "Client did not provide this detail."}`,
    `Photo Link: ${fields.photoLink || "Client did not provide this detail."}`,
    "",
    "Message:",
    fields.message || "Client did not provide this detail.",
  ].join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (clean(payload.company)) {
      return Response.json({ ok: true });
    }

    const fields: ContactFields = {
      name: clean(payload.name),
      email: clean(payload.email),
      phone: clean(payload.phone),
      serviceType: clean(payload.serviceType),
      location: clean(payload.location),
      dimensions: clean(payload.dimensions),
      materialStatus: clean(payload.materialStatus),
      materialDetails: clean(payload.materialDetails),
      timeline: clean(payload.timeline),
      photoLink: clean(payload.photoLink),
      message: clean(payload.message),
    };

    const missingField = requiredFields.find((field) => !fields[field]);
    if (missingField) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || "NOVACY <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return Response.json({ error: "Contact form is not configured yet." }, { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: fields.email,
        subject: `NOVACY project request — ${fields.serviceType || "Project consultation"}`,
        html: buildEmailHtml(fields),
        text: buildText(fields),
      }),
    });

    if (!resendResponse.ok) {
      const error = (await resendResponse.json().catch(() => null)) as { message?: string } | null;
      return Response.json(
        { error: error?.message || "Unable to send request." },
        { status: resendResponse.status },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send request." }, { status: 500 });
  }
}
