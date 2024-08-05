import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: [true, "Name field is required."],
    minLength: [2, "Name must be 2 character long."],
    type: Schema.Types.String,
  },

  email: {
    required: [true, "Email field is required."],
    type: Schema.Types.String,
    unique: true,
    trim: true,
  },
  password: {
    type: Schema.Types.String,
  },
  passportid: {
    required: [true, "passport field is required."],
    type: Schema.Types.String,
  },
  phonenumber: {
    required: [true, "Phone number field is required."],
    type: Schema.Types.String,
  },
  country: {
    required: [true, "Country field is required."],
    type: Schema.Types.String,
  },
  city: {
    required: [true, "City field is required."],
    type: Schema.Types.String,
  },
  pin: {
    required: [false],
    minLength: [6, "Name must be 6 character long."],
    type: Schema.Types.String,
  },


  avtar: {
    required: false,
    type: Schema.Types.String,
  },
  role: {
    required: true,
    type: Schema.Types.String,
    default: "User",
  },

  package: {
    required: [true, "Package field is required."],
    type: Schema.Types.String,
  },

  withdrawal: {
    required: [false],
    type: Schema.Types.String,

  },
  currency: {
    required: true,
    type: Schema.Types.String,
    default: "UDS",
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
