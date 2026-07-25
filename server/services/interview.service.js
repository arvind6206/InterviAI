import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


export const generateFirstQuestion = async (resume) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",

      contents: `
You are an experienced software engineering interviewer.

Based on the candidate's resume, generate ONLY ONE interview question.

Candidate Summary:
${resume.summary}

Skills:
${resume.skills.join(", ")}

Projects:
${resume.projects.join(", ")}

Experience:
${resume.experience}

Education:
${resume.education}

Rules:
1. Generate only ONE question.
2. Do not number the question.
3. Do not add explanations.
4. Return only the question as plain text.
`,
    });

    return response.text.trim();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to generate first question.");
  }
};

export const evaluateAnswer = async (question, answer) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",

      contents: `
You are interviewing this candidate.

Resume Summary:
${resume.summary}

Skills:
${resume.skills.join(", ")}

Projects:
${resume.projects.join(", ")}

Current Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Generate the next question based on the candidate's resume and previous discussion.

Return ONLY JSON.

Do not use markdown.
Do not wrap the response inside \`\`\`.
Do not write explanations.

Return exactly this format:

{
  "score": 8,
  "feedback": "",
  "nextQuestion": "",
  "overallScore": 0,
  "overallFeedback": "",
  "strengths": [],
  "weaknesses": [],
  "recommendations": []
}

Rules:

1. Score should be between 1 and 10.
2. Feedback should be short.
3. Generate ONLY ONE next interview question.
4. Leave overallScore as 0.
5. Leave overallFeedback empty.
6. Leave strengths, weaknesses and recommendations empty.
`,
    });

    let result = response.text;

    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(result);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to evaluate answer.");
  }
};