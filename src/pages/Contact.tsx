import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { profile } from "../data/profile";
import { GithubIcon } from "../components/icons/GithubIcon";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emptyForm: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Invalid email format.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter your message.";
  else if (values.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

const Contact = () => {
  const [values, setValues] = useState<Fields>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status === "success") setStatus("idle");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setValues(emptyForm);
    }, 1500);
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: GithubIcon, label: "GitHub", value: profile.github, href: profile.githubUrl },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ];

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary dark:bg-gray-900 dark:text-gray-100 ${hasError ? "border-red-500" : "border-black/10 dark:border-white/10"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Send me a message using the form below, or reach out directly via the channels on the side."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section aria-labelledby="contact-form-title" className="rounded-2xl border border-black/10 bg-white p-6 transition-colors duration-300 dark:border-white/10 dark:bg-gray-800 sm:p-8">
          <h2 id="contact-form-title" className="mb-6 text-xl font-semibold text-foreground transition-colors duration-300 dark:text-white">
            Send a message
          </h2>

          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass(Boolean(errors.name))}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass(Boolean(errors.email))}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={update("subject")}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={fieldClass(Boolean(errors.subject))}
              />
              {errors.subject && (
                <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={update("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : "message-hint"}
                className={fieldClass(Boolean(errors.message))}
              />
              {errors.message ? (
                <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              ) : (
                <p id="message-hint" className="mt-1.5 text-xs text-gray-600 dark:text-gray-300">
                  Minimum 20 characters ({values.message.trim().length}/20).
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:opacity-90 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" /> Send message
                </>
              )}
            </button>

            <div aria-live="polite" className="mt-4 min-h-10">
              {status === "success" && (
                <div className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-secondary px-4 py-2.5 text-sm text-primary dark:border-primary/20 dark:bg-primary/20">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Thank you! Your message has been sent, I will get back to you soon.</span>
                </div>
              )}
            </div>
          </form>
        </section>

        <section aria-labelledby="channels-title" className="h-fit rounded-2xl border border-black/10 bg-white p-6 transition-colors duration-300 dark:border-white/10 dark:bg-gray-800 sm:p-8">
          <h2 id="channels-title" className="mb-6 text-xl font-semibold text-foreground transition-colors duration-300 dark:text-white">
            Contact Channels
          </h2>
          <ul className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="break-words text-sm font-medium text-foreground transition-colors hover:text-primary dark:text-gray-100 dark:hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground dark:text-gray-100">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
