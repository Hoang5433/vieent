"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, AlertCircle, Loader2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";
type FormData = {
  name: string;
  email: string;
  message: string;
  _honey: string; // honeypot
};

const INITIAL: FormData = { name: "", email: "", message: "", _honey: "" };

function validate(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function SignupForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (form._honey) return;

    const validation = validate(form);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xzdlodap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setState("success");
      setForm(INITIAL);
    } catch {
      setState("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <Section id="signup" background="muted">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Get early access
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Ready to transform your data? Sign up and we&apos;ll be in touch.
            </p>
          </div>

          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Thanks for signing up!
              </h3>
              <p className="text-text-secondary">
                We&apos;ll reach out to you shortly at{" "}
                <span className="font-medium text-text-primary">{form.email}</span>.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setState("idle")}
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              {/* Honeypot — hidden from users */}
              <div aria-hidden className="absolute -left-[9999px] opacity-0">
                <label htmlFor="_honey">Don&apos;t fill this</label>
                <input
                  id="_honey"
                  name="_honey"
                  type="text"
                  value={form._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your use case..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y ${errors.message ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Error banner */}
                {state === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>
                      Something went wrong. Please try again or email us
                      directly.
                    </span>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-text-muted">
                  No spam, ever. We&apos;ll only use your info to follow up.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </Container>
    </Section>
  );
}
