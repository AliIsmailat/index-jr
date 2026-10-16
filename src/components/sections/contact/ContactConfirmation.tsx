import type { RefObject } from "react";
import { buttonClasses } from "../../../lib/buttonStyles";
import type { ContactValues } from "./contact";
import { useSite } from "../../../content/i18n/lang";

interface ContactConfirmationProps {
  sent: ContactValues;
  confirmRef: RefObject<HTMLHeadingElement | null>;
  onReset: () => void;
}

export function ContactConfirmation({ sent, confirmRef, onReset }: ContactConfirmationProps) {
  const { contact: content } = useSite();

  return (
    <div className="self-start rounded-card bg-surface p-6 text-text sm:p-8">
      <h3 ref={confirmRef} tabIndex={-1} className="text-2xl sm:text-3xl">
        {content.confirm.title}
      </h3>
      <p className="mt-3 text-lg text-muted">
        {content.confirm.thanks} {sent.name.trim()}! {content.confirm.message}
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
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="text-muted">{label}</dt>
            <dd className="font-semibold [overflow-wrap:anywhere]">{value}</dd>
          </div>
        ))}
      </dl>
      <button type="button" onClick={onReset} className={`${buttonClasses("outline")} mt-6`}>
        {content.confirm.again}
      </button>
    </div>
  );
}
