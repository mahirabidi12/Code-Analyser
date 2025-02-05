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
        console.error(`api.js file error ${error}`)
    }
}