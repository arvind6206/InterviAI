import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
     apiKey: process.env.GEMINI_API_KEY 
});

export const analyzeResume = async(parsedText) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: `
                Extract the following information from this resume.

                Return ONLY valid JSON.

                Do not use markdown.
                Do not wrap the response inide \'\'\'json.
                Do not add any explanation.

                Return JSON in exactly this format:
                {
                    "summary": "",
                    "skills": [],
                    "projects": [],
                    "experience": "",
                    "education": "",
                    "certifications": []
                }
                    Resume: 

                    ${parsedText}
                     `,
        })

        let result = response.text;

        result = result
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

            return JSON.parse(result)
    } catch (error) {
        console.log("Gemini Error:", error)
        throw new Error("Failed to analyze resume")
    }
}

