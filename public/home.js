const clickedGemini = document.getElementById("clickedGemini");
const clickedOpenAi = document.getElementById("clickedOpenAi");


clickedGemini.addEventListener("click" , (event)=>{
    window.location.href = "/gemini"
})

clickedOpenAi.addEventListener("click" , (event)=>{
    window.location.href = "/openAi"
})