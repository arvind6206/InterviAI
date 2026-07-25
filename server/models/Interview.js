import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress" , "completed"],
      default: "pending",
    },
    currentQuestion: {
      type: Number,
      default: 0,
    },
    conversation: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
        feedback: {
          type: String,
        },
        score: {
          type: Number,
        },
      },
    ],

    overallScore: {
      type: Number,
    },
    overallFeedback: {
      type: String,
    },
    strengths: [
      {
        type: String,
      },
    ],
    weaknesses: [
      {
        type: String,
      },
    ],
    recommendations: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

export const InterviewModel = mongoose.model("Interview", interviewSchema);
