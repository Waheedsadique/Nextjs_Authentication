import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().trim().minLength(2).maxLength(30),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20).confirmed(),
  passportid: vine.string().trim(),
  phonenumber: vine.string().trim(),
  country: vine.string().trim(),
  city: vine.string().trim(),
  pin : vine.string().trim().minLength(6).maxLength(6),
  package : vine.string().trim(),
  currency : vine.string().trim(),
});

export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6),
});
