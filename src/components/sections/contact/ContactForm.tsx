import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { buttonClasses } from "../../../lib/buttonStyles";
import {
  emptyContact,
  fieldIds,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "./contact";
import { useSite } from "../../../content/i18n/lang";
import { Icon, InstagramIcon } from "../../ui/Icons";
import { SectionHeading } from "../../ui/SectionHeading";

import { social } from "../../../content/content.ts";

const labelClass =
  "block text-sm font-bold uppercase tracking-[0.12em] text-text";

const inputClass =
  "mt-2 block w-full rounded-xl border-2 border-text/30 bg-page px-4 py-3 text-base text-text placeholder:text-muted focus:border-text aria-[invalid=true]:border-text aria-[invalid=true]:bg-lime/30";

interface FieldProps {
  field: ContactField;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

function Field({ field, label, error, hint, children }: FieldProps) {
  const id = fieldIds[field];
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-tips`} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-fel`}
          className="mt-2 border-l-4 border-text pl-3 text-sm font-bold"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const site = useSite();
  const { contact: content } = site;
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState<ContactValues | null>(null);
  const [attempt, setAttempt] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (attempt > 0) summaryRef.current?.focus();
  }, [attempt]);

  useEffect(() => {
    if (sent) confirmRef.current?.focus();
  }, [sent]);

  const update = (patch: Partial<ContactValues>) =>
    setValues((current) => ({ ...current, ...patch }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validateContact(values);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setAttempt((current) => current + 1);
      return;
    }

    setSent(values);
  };

  const reset = () => {
    setValues(emptyContact);
    setErrors({});
    setSent(null);
  };

  const errorFields = Object.keys(errors) as ContactField[];
  const message = (field: ContactField) =>
    errors[field] ? content.errors[field] : undefined;

  const describedBy = (field: ContactField, hint = false) => {
    const id = fieldIds[field];
    const parts = [
      hint ? `${id}-tips` : "",
      errors[field] ? `${id}-fel` : "",
    ].filter(Boolean);
    return parts.length > 0 ? parts.join(" ") : undefined;
  };

  const invalid = (field: ContactField) => (errors[field] ? true : undefined);

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-rubrik"
      className="bg-band py-16 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            id="kontakt-rubrik"
            eyebrow={content.eyebrow}
            title={content.title}
            tone="dark"
          />
          <p className="mt-6 max-w-md text-lg text-band-muted">
            {content.intro}
          </p>

          <h3 className="mt-10 text-xl text-white">{content.next.title}</h3>
          <ul role="list" className="mt-4 grid gap-3">
            {content.next.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-on-lime">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mt-10 grid gap-3 border-t border-white/15 pt-8"
          >
            <li className="flex items-center gap-3 text-white">
              <Icon name="mail" className="h-5 w-5 text-lime" />
              <span className="sr-only">{content.emailLabel}: </span>
              <a
                href={`mailto:${site.email}`}
                className="font-semibold hover:text-lime"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white">
              <InstagramIcon className="h-5 w-5 text-lime" />
              <span className="sr-only">Instagram: </span>
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-lime"
              >
                @{social.instagram.handle}
                <span className="sr-only">, {site.projects.newTabLabel}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-white">
              <Icon name="pin" className="h-5 w-5 text-lime" />
              <span className="sr-only">{content.locationLabel}: </span>
              {site.location}
            </li>
          </ul>
        </div>

        {sent ? (
          <div className="self-start rounded-card bg-surface p-6 text-text sm:p-8">
            <h3 ref={confirmRef} tabIndex={-1} className="text-2xl sm:text-3xl">
              {content.confirm.title}
            </h3>
            <p className="mt-3 text-lg text-muted">
              {content.confirm.thanks} {sent.name.trim()}!{" "}
              {content.confirm.message}
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em]">
              {content.confirm.summary}
            </p>
            <dl className="mt-3 divide-y divide-line border-y border-line">
              {(
                [
                  [content.labels.name, sent.name.trim()],
                  [content.labels.contact, sent.contact.trim()],
                  [content.labels.topic, content.topics[Number(sent.topic)]],
                  [content.labels.message, sent.message.trim()],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
                >
                  <dt className="text-muted">{label}</dt>
                  <dd className="font-semibold [overflow-wrap:anywhere]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">{content.demoNote}</p>
            <button
              type="button"
              onClick={reset}
              className={`${buttonClasses("outline")} mt-6`}
            >
              {content.confirm.again}
            </button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={onSubmit}
            className="grid gap-6 self-start rounded-card bg-surface p-6 text-text sm:p-8"
          >
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="alert"
              className="empty:hidden"
            >
              {errorFields.length > 0 && (
                <div className="rounded-xl border-2 border-text bg-lime/30 p-5">
                  <p className="font-display text-xl">{content.errorTitle}</p>
                  <ul role="list" className="mt-3 grid gap-1">
                    {errorFields.map((field) => (
                      <li key={field}>
                        <a
                          href={`#${fieldIds[field]}`}
                          className="font-semibold underline underline-offset-4 hover:text-muted"
                        >
                          {content.errors[field]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Field
              field="name"
              label={content.labels.name}
              error={message("name")}
            >
              <input
                id={fieldIds.name}
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update({ name: event.target.value })}
                aria-invalid={invalid("name")}
                aria-describedby={describedBy("name")}
                className={inputClass}
              />
            </Field>

            <Field
              field="contact"
              label={content.labels.contact}
              error={message("contact")}
            >
              <input
                id={fieldIds.contact}
                type="text"
                autoComplete="email"
                value={values.contact}
                onChange={(event) => update({ contact: event.target.value })}
                aria-invalid={invalid("contact")}
                aria-describedby={describedBy("contact")}
                className={inputClass}
              />
            </Field>

            <Field
              field="topic"
              label={content.labels.topic}
              error={message("topic")}
            >
              <select
                id={fieldIds.topic}
                value={values.topic}
                onChange={(event) => update({ topic: event.target.value })}
                aria-invalid={invalid("topic")}
                aria-describedby={describedBy("topic")}
                className={inputClass}
              >
                <option value="">{content.topicPlaceholder}</option>
                {content.topics.map((topic, index) => (
                  <option key={topic} value={index}>
                    {topic}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              field="message"
              label={content.labels.message}
              error={message("message")}
              hint={content.messageHint}
            >
              <textarea
                id={fieldIds.message}
                rows={5}
                value={values.message}
                onChange={(event) => update({ message: event.target.value })}
                aria-invalid={invalid("message")}
                aria-describedby={describedBy("message", true)}
                className={inputClass}
              />
            </Field>

            <div>
              <button
                type="submit"
                className={`${buttonClasses()} w-full sm:w-auto`}
              >
                {content.submitLabel}
              </button>
              <p className="mt-4 text-sm text-muted">{content.demoNote}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
