const { Schema, model } = require("mongoose");
const joi = require("joi");

const handleMongooseSchemaError = require("../utils/handleMongooseSchemaError");

const subscription = ["starter", "pro", "business"];
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscription,
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseSchemaError);

const User = model("user", userSchema);

// schema joi - template //

const registerTemplate = joi.object({
  password: joi.string().required(),
  email: joi.string().required(),
  subscription: joi.string(),
  token: joi.string(),
});
const loginTemplate = joi.object({
  password: joi.string().required(),
  email: joi.string().required(),
});
const subscriptionTemplate = joi.object({
  subscription: joi.string().valueOf(subscription).required(),
});
const templates = {
  registerTemplate,
  loginTemplate,
  subscriptionTemplate,
};
module.exports = { User, templates };
