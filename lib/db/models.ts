import mongoose, { Mongoose, Schema } from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    id: { type: Schema.Types.UUID, isRequired: true },
    firstName: { type: String, isRequired: true },
    lastName: { type: String },
    birthdate: {
      type: Date,
    },
    role: {
      accountType: {
        type: String,
        enum: ["admin", "teacher", "student", "parent"],
        isRequired: true,
        default: "student",
      },
      batch: {
        type: [String],
      },
    },
    age: {
      type: Number,
    },
    isOnLeave: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Users =
  mongoose?.models?.users || mongoose.model("users", usersSchema);
