const suits = ["clubs", "hearts", "spades", "diamonds"]
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
]

let deck = []
const containerNode = document.getElementById("card-container")

const randomCard = () => {
  let index = Math.floor(Math.random() * deck.length)
  console.log(index)
  return deck[index]
}

const createDeck = () => {
  deck = []
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = { rank: ranks[j], suit: suits[i] }
      deck.push(card)
    }
  }
}

const getCardName = (card) => {
  return `${card.rank} ${card.suit}`
}

const shuffleDeck = () => {
  let currentIndex = deck.length
  let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ]
  }
}

const drawCard = () => {
  return deck.pop()
}

const displayDeck = () => {
  containerNode.innerHTML = ""
  for (let card of deck) {
    let embedNode = document.createElement("embed")
    embedNode.src = `./images/${getImageCard(card)}.svg`
    embedNode.height = "100"
    embedNode.width = "100"
    containerNode.appendChild(embedNode)
  }
}

const drawCardUI = () => {
  let card = drawCard()
  let objectNode = document.getElementById("card-image-display")
  objectNode.src = `./images/${getImageCard(card)}.svg`

  containerNode.lastChild.remove()
}

const creatDeckUI = () => {
  createDeck()
  displayDeck()
}
const getImageCard = (card) => {
  return `${card.rank}_of_${card.suit}`
}

const shuffleUI = () => {
  shuffleDeck()
  displayDeck()
}
createDeck()
displayDeck()

// console.log(getCardName(randomCard()))

console.log(deck)
