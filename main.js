// ==== Array (Lister) ====
// = - Gruppering av data =
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let persons = [
  "Jhon",
  "Jane",
  "Peter",
  "Pan",
  "Mary",
  "Agathe",
  "Kent",
  "Maister",
]

// En løkke, metode for å gjenta kode et sett med ganger
// Ofte brukt i kombinasjon med lister (array)
for (let iteration = 0; iteration < persons.length; iteration = iteration + 1)
{
  const greeting = "Greeting " + persons[iteration] + "!"
  createListElement(greeting)
}

/**
 * Funksjon for å lage nye liste elementer
 */
function createListElement(message) {
  let wrapper = document.createElement("li")

  wrapper.innerHTML = `
    <p>${message}</p>
  `
  
  let listElement = document.querySelector("#greetings")
  listElement.append(wrapper)
}

// ================ Eksempel på en game loop ================
let startGameButton = document.querySelector("#start-game")
startGameButton.addEventListener("click", startGame)

/**
 * Funksjon for å starte spillet
 */
function startGame() {
  let playerScore = 0
  
  while (playerScore < 10) {
    // Ask the player a question
    let answer = prompt("Yes or No")
    
    if (answer === "Yes") {
      playerScore++
    } else if (answer === "No") {
      playerScore = playerScore - 1
    } else {
      console.log("Please write 'Yes' or 'No'")
    }
  
    console.log("New Score: " + playerScore)
  }
}  

// ========== Objekter ========="
// = - en samling av variabler ="
// ============================="
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"

let firstProject = {
  id: 1,
  image: "https://images.unsplash.com/photo-1516400904033-7d182cd52d6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhbmN5fGVufDB8fDB8fHww",
  title: "Første Web Prosjekt",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo, quos odio dolores hic voluptate, ipsum esse maxime suscipit, facilis eos vel repellendus unde facere molestias voluptatem architecto at laudantium.",
  favorited: false
}

let secondProject = {
  id: 2,
  image: "https://images.unsplash.com/photo-1481238613160-f39d2bd78dea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbmN5fGVufDB8fDB8fHww",
  title: "Første JavaScript Prosjekt",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo, quos odio dolores hic voluptate, ipsum esse maxime suscipit, facilis eos vel repellendus unde facere molestias voluptatem architecto at laudantium.",
  favorited: false
}

// === Lister, Løkker og Objekter ===

let projects = [ firstProject, secondProject ]

for (let i = 0; i < projects.length; i++) {
  createProjectCard(projects[i])
}

/**
 * Funksjon for å lage html for prosjekter, samt å legge de til i HTML
 */
function createProjectCard(projectInfo) {
  // Lag html elementet
  let wrapper = document.createElement("li")
  wrapper.innerHTML = `
    <article>
      <img src=${projectInfo.image} />
      <h2>${projectInfo.title}</h2>
      <p>${projectInfo.body}</p>
    </article>
  `

  // Legg det til i dokumentet (DOM)
  let projectList = document.querySelector("#projects")
  projectList.append(wrapper)
}