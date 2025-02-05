import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'
dotenv.config()

export async function GetGeminiData(prompt) {
    try{
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        let data = result.response.text();
        data  = data.replace(/```json|```/g, '').trim();
        return data
    }
    catch(error){
        console.error(`api.js file, GetGeminiData function error ${error}`)
    }
}

export async function GetGroqData(prompt) {
    try{
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama3-8b-8192", // Specify the Groq model
                messages: [
                    { "role": "user", "content": prompt }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        return data.choices[0].message.content
    }
    catch(error){
        console.error(`api.js file, GetGroqData function error ${error}`)
    }
}