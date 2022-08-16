const suits = ["♠", "♥", "♣", "♦"]
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

let deck = []

const randomCard = () => {
  let index = Math.floor(Math.random() * deck.length)
  console.log(index)
  return deck[index]
}

const createDeck = () => {
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

createDeck()

// console.log(getCardName(randomCard()))

shuffleDeck()
console.log(getCardName(drawCard()))

console.log(deck)
