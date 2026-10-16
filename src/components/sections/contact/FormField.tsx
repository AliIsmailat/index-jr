import type { ReactNode } from "react";
import { fieldIds, type ContactField } from "./contact";

const labelClass = "block text-sm font-bold uppercase tracking-[0.12em] text-text";

export const inputClass =
  "mt-2 block w-full rounded-xl border-2 border-text/30 bg-page px-4 py-3 text-base text-text placeholder:text-muted focus:border-text aria-[invalid=true]:border-text aria-[invalid=true]:bg-lime/30";

interface FieldProps {
  field: ContactField;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export function Field({ field, label, error, hint, children }: FieldProps) {
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
        <p id={`${id}-fel`} className="mt-2 border-l-4 border-text pl-3 text-sm font-bold">
          {error}
        </p>
      )}
    </div>
  );
}
