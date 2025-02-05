import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));


router.use(express.static(path.join(__dirname , "../public")));

router.get("/" , (req,res)=>{
    res.sendFile(path.join(__dirname , "../public/home.html"));
})

router.get("/gemini" , (req,res)=>{
    res.sendFile(path.join(__dirname , "../public/gemini.html"));
})

router.get("/groq" , (req,res)=>{
    res.sendFile(path.join(__dirname , "../public/groq.html"));
})


export default router;