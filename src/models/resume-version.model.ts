import { Schema, model, models } from "mongoose";

const ResumeVersionSchema = new Schema(
  {
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    version: {
      type: Number,
      required: true,
    },

    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ResumeVersion =
  models.ResumeVersion ||
  model("ResumeVersion", ResumeVersionSchema);