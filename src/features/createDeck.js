import { ref } from 'vue'

const cardList = ref([])

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const initDeck = deckData => {
  const rndInt = randomIntFromInterval(1, 4)
  const doubleCard = rndInt.toString();
  console.log(doubleCard);

  deckData.forEach(item => {
    cardList.value.push({
      value: item,
      variant: 1,
      visible: false,
      position: null,
      matched: false
    })



    if(item === doubleCard) {
        cardList.value.push({
        value: item,
        variant: 2,
        visible: false,
        position: null,
        matched: false
      })
    }
  })

  console.log(deckData);
}

const updateCardPosition = () => {
  cardList.value = cardList.value.map((card, index) => {
    return {
      ...card,
      position: index
    }
  })
}

export default function createDeck(deckData) {
  initDeck(deckData)
  updateCardPosition()

  return {
    cardList
  }
}
