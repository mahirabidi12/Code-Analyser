const clickedGemini = document.getElementById("clickedGemini");
const clickedGroqAi = document.getElementById("clickedGroqAi");


clickedGemini.addEventListener("click" , (event)=>{
    window.location.href = "/gemini"
})

clickedGroqAi.addEventListener("click" , (event)=>{
    window.location.href = "/groq"
})