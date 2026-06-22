import { Schema, model, models } from "mongoose";

const ResumeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    data: {
      type: Object,
      required: true,
    },

    currentVersion: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  },
);

export const Resume = models.Resume || model("Resume", ResumeSchema);
