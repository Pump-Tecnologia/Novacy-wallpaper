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
] as const;

interface FieldLabelProps {
  label: string;
  required?: boolean;
}

function FieldLabel({ label, required = false }: FieldLabelProps) {
  return (
    <label className="mb-2 flex items-baseline gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
      <span>{label}</span>
      {required ? (
        <span className="text-red-600" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="text-[10px] font-medium tracking-[0.16em] text-gray-400">
          (Optional)
        </span>
      )}
    </label>
  );
}

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
    `Service: ${values.serviceType || "Client will confirm later"}`,
    `Location: ${values.location || "Client will confirm later"}`,
    `Dimensions: ${values.dimensions || "Client will confirm later"}`,
    `Material status: ${values.materialStatus || "Client will confirm later"}`,
    `Material / roll details: ${values.materialDetails || "Client will confirm later"}`,
    `Timeline: ${values.timeline || "Client will confirm later"}`,
    `Photo link: ${values.photoLink || "Client will confirm later"}`,
    "",
    "Message:",
    values.message || "Client will confirm later",
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
      setMessage("Please complete your name, email, and phone before continuing via WhatsApp.");
      return;
    }

    setStatus("idle");
    setMessage("");
    const text = encodeURIComponent(buildWhatsappMessage(values));
    window.open(`https://wa.me/${whatsapp.phone}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid min-w-0 gap-5 md:grid-cols-2">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <p className="md:col-span-2 text-[11px] leading-relaxed text-gray-500">
        Fields marked with <span className="font-bold text-red-600">*</span> are required. All other fields are optional — share what you can and we will follow up on the rest.
      </p>

      <div className="flex flex-col">
        <FieldLabel label="Full Name" required />
        <input
          required
          name="name"
          type="text"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Email Address" required />
        <input
          required
          name="email"
          type="email"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Phone" required />
        <input
          required
          name="phone"
          type="tel"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="(000) 000-0000"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Service Type" />
        <select
          name="serviceType"
          defaultValue={initialService}
          onChange={(event) => onServiceChange?.(event.target.value)}
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
        >
          {serviceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:col-span-2">
        <FieldLabel label="Project Location" />
        <input
          name="location"
          type="text"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="City, state, or neighborhood"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Approx. Dimensions" />
        <input
          name="dimensions"
          type="text"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Example: 12 ft x 9 ft, 2 walls"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Material Status" />
        <select
          name="materialStatus"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
        >
          {materialOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:col-span-2">
        <FieldLabel label="Wallpaper Type / Roll Info" />
        <input
          name="materialDetails"
          type="text"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Type, brand, roll size, or not sure yet"
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Timeline" />
        <input
          name="timeline"
          type="text"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="ASAP, this month, flexible..."
        />
      </div>
      <div className="flex flex-col">
        <FieldLabel label="Photo Link" />
        <input
          name="photoLink"
          type="url"
          className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
          placeholder="Google Drive, Dropbox, iCloud..."
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <FieldLabel label="Message" />
        <textarea
          name="message"
          rows={5}
          className="w-full min-w-0 resize-none border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-accent"
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

      <div className="grid min-w-0 gap-3 md:col-span-2 sm:grid-cols-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-3 bg-accent px-4 py-4 text-center text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70 sm:px-7 sm:text-xs sm:tracking-[0.22em]"
        >
          {status === "submitting" ? "Sending..." : submitLabel}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          type="button"
          onClick={handleWhatsapp}
          className="group inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-3 border border-primary px-4 py-4 text-center text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-white sm:px-7 sm:text-xs sm:tracking-[0.18em]"
        >
          {whatsapp.label}
          <MessageCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
