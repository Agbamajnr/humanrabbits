import _ from 'lodash'
import { computed, ref } from 'vue'

export default function createGame(deck) {
  const newPlayer = ref(true)


  const startGame = () => {
    newPlayer.value = false;

    deck.value = _.shuffle(deck.value)
    deck.value = deck.value.map((card, index) => {
      return {
        ...card,
        matched: false,
        position: index,
        visible: false
      }
    })
  }

  const restartGame = () => {
    startGame();
  }


  const matchesFound = computed(() => {
    const matchedCards = deck.value.filter(card => card.matched === true).length

    return matchedCards / 2
  })

  startGame()

  return {
    matchesFound,
    newPlayer,
    startGame,
    status,
    restartGame
  }
}
