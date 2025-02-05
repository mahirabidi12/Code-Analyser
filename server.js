import express from 'express'
import pagesRoutes from './routes/pages.js'
import bodyParser from 'body-parser';
import {GetGeminiData} from './api.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})

app.use("/" , pagesRoutes);
app.use(bodyParser.json());

app.post("/getGeminiData" ,async (req,res) => {
    const prompt = req.body.prompt;
    const data = await GetGeminiData(prompt);
    res.send(data);
})