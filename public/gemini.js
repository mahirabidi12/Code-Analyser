const writing = document.getElementById("writing");
const submit = document.getElementById("submit");
const displayGood = document.getElementById("displayGood");
const displayBad = document.getElementById("displayBad");
const myChart = document.getElementById("myChart");

submit.addEventListener("click" , (event) =>{
    const userPrompt = `Analyse the following code and give me provide structured feedback as follows : 
    Rate the code(out of 100) in terms of readibility
    Rate the code(out of 100) in terms of efficiency
    Rate the code(out of 100) in terms of precision
    Rate the code(out of 100) in terms of documentation
    Rate the code(out of 100) in terms of optimisation
    Rate the code(out of 100) in terms of quality
    Identify the issues in the code , and the code writing principles which are not follwed
    Indentify the good things in the code , and the principle followed
    Structure the response in a valid JSON object with the following structure 

    {
    "readibility" : (number),
    "efficiency" : (number),
    "precision" : (number),
    "documentation" : (number),
    "optimisation" : (number),
    "quality" : (number),
    "Good" : (string),
    "Bad" : (string)
    }
    Here is the code:- ${writing.value}
    `

    fetch("/getGeminiData" , {
        method : "POST" , 
        headers : {"Content-Type" : "application/json" },
        body : JSON.stringify({prompt : userPrompt})
    })
    .then((response) => response.json())
    .then((data) => {
        displayTextData(data);
        displayGraphData(data);
        console.log(data);
    })
    .catch((error) => console.log(`gemini.js file error ${error}`))
})


function displayTextData(data){
    displayGood.textContent = data.Good;
    displayBad.textContent = data.Bad;
}

function displayGraphData(data){
    const newChart = new Chart(myChart, {
        type: 'bar', // Change to 'line', 'pie', etc., if needed
        data: {
            labels: ['readibility', 'efficiency', 'precision', 'documentation', 'optimisation', 'quality'],
            datasets: [{
                label: 'Sample Data',
                data: [data.readibility,data.efficiency,data.precision,data.documentation,data.optimisation,data.quality], // Data values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}