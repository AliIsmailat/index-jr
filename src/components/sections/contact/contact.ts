export interface ContactValues {
  name: string;
  contact: string;
  topic: string;
  message: string;
}

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, true>>;

export const emptyContact: ContactValues = { name: "", contact: "", topic: "", message: "" };

export const fieldIds: Record<ContactField, string> = {
  name: "kontakt-namn",
  contact: "kontakt-uppgift",
  topic: "kontakt-amne",
  message: "kontakt-meddelande",
};

export function validateContact(values: ContactValues): ContactErrors {
  const next: ContactErrors = {};
  const contact = values.contact.trim();
  const isEmail = /^\S+@\S+\.\S+$/.test(contact);
  const isPhone = !contact.includes("@") && contact.replace(/\D/g, "").length >= 6;

  if (values.name.trim().length < 2) next.name = true;
  if (!isEmail && !isPhone) next.contact = true;
  if (values.topic === "") next.topic = true;
  if (values.message.trim().length < 10) next.message = true;

  return next;
}
