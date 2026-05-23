"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

interface ContactFormProps {
  serviceOptions: readonly string[];
  materialOptions: readonly string[];
  submitLabel: string;
  initialService?: string;
  onServiceChange?: (service: string) => void;
  whatsapp: {
    label: string;
    phone: string;
    message: string;
  };
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const requiredWhatsappFields = [
  "name",
  "email",
  "phone",
  "serviceType",
  "location",
  "dimensions",
  "materialStatus",
  "timeline",
  "photoLink",
  "message",
] as const;

function getFormValues(form: HTMLFormElement) {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    serviceType: String(formData.get("serviceType") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    dimensions: String(formData.get("dimensions") || "").trim(),
    materialStatus: String(formData.get("materialStatus") || "").trim(),
    materialDetails: String(formData.get("materialDetails") || "").trim(),
    timeline: String(formData.get("timeline") || "").trim(),
    photoLink: String(formData.get("photoLink") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };
}

function buildWhatsappMessage(values: ReturnType<typeof getFormValues>) {
  return [
    "Hi NOVACY, I would like to request a wallpaper project.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Service: ${values.serviceType}`,
    `Location: ${values.location}`,
    `Dimensions: ${values.dimensions}`,
    `Material status: ${values.materialStatus}`,
    `Material / roll details: ${values.materialDetails || "Client will confirm later"}`,
    `Timeline: ${values.timeline}`,
    `Photo link: ${values.photoLink}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export default function ContactForm({
  serviceOptions,
  materialOptions,
  submitLabel,
  initialService,
  onServiceChange,
  whatsapp,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Request sent. We will review the details and follow up shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send request.");
    }
  }

  function handleWhatsapp(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form) return;

    const values = getFormValues(form);
    const missingField = requiredWhatsappFields.find((field) => !values[field]);

    if (missingField) {
      setStatus("error");
      setMessage("Please complete all fields before continuing on WhatsApp.");
      return;
    }

    setStatus("idle");
    setMessage("");
    const text = encodeURIComponent(buildWhatsappMessage(values));
    window.open(`https://wa.me/${whatsapp.phone}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Full Name
        </label>
        <input
          required
          name="name"
          type="text"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Email Address
        </label>
        <input
          required
          name="email"
          type="email"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Phone
        </label>
        <input
          required
          name="phone"
          type="tel"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="(000) 000-0000"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Service Type
        </label>
        <select
          required
          name="serviceType"
          defaultValue={initialService}
          onChange={(event) => onServiceChange?.(event.target.value)}
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
        >
          {serviceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Project Location
        </label>
        <input
          required
          name="location"
          type="text"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="City, state, or neighborhood"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Approx. Dimensions
        </label>
        <input
          name="dimensions"
          type="text"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Example: 12 ft x 9 ft, 2 walls"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Material Status
        </label>
        <select
          name="materialStatus"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
        >
          {materialOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Wallpaper Type / Roll Info
        </label>
        <input
          name="materialDetails"
          type="text"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Vinyl, non-woven, grasscloth, mural, brand, roll size, or 'not sure yet'"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Timeline
        </label>
        <input
          name="timeline"
          type="text"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="ASAP, this month, flexible..."
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Photo Link
        </label>
        <input
          name="photoLink"
          type="url"
          className="border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Google Drive, Dropbox, iCloud..."
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Tell us about the room, wall condition, wallpaper material, timeline, and any important details."
        />
      </div>

      {message && (
        <div
          className={`md:col-span-2 border px-4 py-3 text-sm ${
            status === "success"
              ? "border-accent/30 bg-accent/5 text-primary"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <div className="grid gap-3 md:col-span-2 sm:grid-cols-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : submitLabel}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          type="button"
          onClick={handleWhatsapp}
          className="group inline-flex items-center justify-center gap-3 border border-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-white"
        >
          {whatsapp.label}
          <MessageCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
