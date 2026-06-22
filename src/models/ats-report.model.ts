import { Schema, model, models } from "mongoose";

const ATSReportSchema = new Schema(
  {
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    missingKeywords: {
      type: [String],
      default: [],
    },

    suggestions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const ATSReport =
  models.ATSReport ||
  model("ATSReport", ATSReportSchema);