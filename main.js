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
let count = 0
while (count < persons.length)
{
  // konstruer en ny streng med navnet vi er på nå
  const greeting = "Greeting " + persons[iteration] + "!"

  // Lag et nytt HTML element
  let greetingCard = document.createElement("li")

  // Sett inholdet til elementet
  greetingCard.textContent = greeting

  // Finn ut hvor i HTML vi ønsker å plassere det nye elementet
  let list = document.querySelector("#greetings")

  // Legg det nye elementet til under listen vår
  list.append(greetingCard)

  count = count + 1
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

let currentIndex = 0
while (currentIndex < projects.length)
{
  // Lag et nytt kort
  const card = createProjectCard(projects[currentIndex])

  // Finn hvor i dokumentet det skal legges til
  let projectList = document.querySelector("#projects")

  // Legg det til i dokuemntet
  projectList.append(wrapper)
}

/**
 * Funksjon for å lage html for prosjekter, samt å legge de til i HTML
 */
function createProjectCard(projectInfo) {
  // Lag html elementet
  let newCard = document.createElement("li")
  
  // Element.innerHTML er en annen måte å bestemme innholdet til et element
  newCard.innerHTML = `
    <article>
      <img src=${projectInfo.image} />
      <h2>${projectInfo.title}</h2>
      <p>${projectInfo.body}</p>
    </article>
  `
  
  return newCard
}