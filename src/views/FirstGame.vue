<script>
import { ref, watch, reactive } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import createDeck from '../features/createDeck'
import createGame from '../features/createGame'
import GameBoard from '../components/game/GameBoard'
import rabDeck from '../data/rabDeck.json'

export default {
  name: 'App',
  components: {
    GameBoard
  },
  setup() {
    const url = 'https://humanrabbit.onrender.com/api'
    const { cardList } = createDeck(rabDeck)

    const store = useStore()

    const userBalance = computed(() => {
      return store.state.user[0].wallet
    })

    const {
      newPlayer,
      restartGame,
      matchesFound,
      status
    } = createGame(cardList)

    const userInput = reactive({
      stake: Number('50'),
    })

    const data = reactive({
      id: '',
      amount: '',
      negative: false,
    })

    const resText = ref('Pick any of the following cards to open')
    const userSelection = ref([])
    const userCanFlipCard = ref(true)
    const userCanAddStake = ref(false)
    const haveChosedStake = ref(false)
    const successColor = ref();
    const finalReward = ref();
    const userFinishedSession = ref(false);


    const flipCard = payload => {
      if (userCanFlipCard.value) {
        cardList.value[payload.position].visible = true

        if (userSelection.value[0]) {
          if (
            userSelection.value[0].position === payload.position &&
            userSelection.value[0].faceValue === payload.faceValue
          ) {
            return
          } else {
            userSelection.value[1] = payload
          }
        } else {
          userSelection.value[0] = payload
        }
      } else {
        return
      }
    }

    const startNewGame = () => {
      userCanFlipCard.value = true;
      userCanAddStake.value = false;
      haveChosedStake.value = false;
      userFinishedSession.value = false;
      successColor.value = null;
      finalReward.value = null;
      resText.value = 'Pick any card';
      restartGame()
    }



    const autoplay = () => {
      function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
      }

      let randomFace = Math.floor(random(1, cardList.value.length))
      let randomPosition = Math.floor(random(0, cardList.value.length))

      const cardInfo = reactive({
        faceValue: randomFace.toString(),
        position: randomPosition
      });
      
      function generateNewValues() {
        let newFace = Math.floor(random(1, cardList.value.length));
        let newPos = Math.floor(random(0, cardList.value.length));
        cardInfo.position = newPos;
        cardInfo.faceValue = newFace.toString();


        flipCard(cardInfo)
      }
      


      if (cardList.value[cardInfo.position].visible = false) {
        flipCard(cardInfo);

      } else {

        generateNewValues()
      }

    }
    



    watch(matchesFound, currentValue => {
      if (currentValue === 8) {
        launchConfetti()
      }
    })

    watch(
      userSelection,
      async currentValue => {
        if (currentValue.length === 1) {
          resText.value = 'All right, Add your stakes to play'
          userCanFlipCard.value = false
          userCanAddStake.value = true
        }
        if (currentValue.length === 2) {
          const cardOne = currentValue[0]
          const cardTwo = currentValue[1]
          // Disable ability to flip cards
          userCanFlipCard.value = false

          userFinishedSession.value = true

          if (cardOne.faceValue === cardTwo.faceValue) {
            successColor.value = true;
            resText.value = 'Congrat’s, You won!!!'
            finalReward.value = userInput.stake * 2;
            data.amount = finalReward.value;


            cardList.value[cardOne.position].matched = true
            cardList.value[cardTwo.position].matched = true

            //work on finances on winnings
            const addWinnings = await axios.post(url + '/blockchain/gameAction', data)
           } else {
            finalReward.value = userInput.stake - (userInput.stake * 2);

            data.amount = Math.abs(userInput.stake - (userInput.stake * 2))
            successColor.value = false;
            resText.value = 'Sorry, You lost!!!';

            //work on finances on deduction
            data.negative = true;
            const deductStake = await axios.post(url + '/blockchain/gameAction', data)

           }

          userSelection.value.length = 0
        }
      },
      { deep: true }
    )

    const playStake = (userId) => {
      data.id = userId;
      if(userBalance.value < userInput.stake) {
        resText.value = "Balance to low to continue"
      } else {
        resText.value = 'Task: choose any card that matches your revealed card';
        userCanFlipCard.value = true;
        haveChosedStake.value = true;
        userCanAddStake.value = false;
      }
      console.log(userBalance, userInput.stake);
    }


    const increaseStake = () => {
      if (userBalance.value > userInput.stake - 50) {
        userInput.stake = userInput.stake + 50;
      }else if (userBalance.value > userInput.stake) {
        resText.value = "Please deposit to continue"
      } else {
        resText.value = "Balance to low to continue"
      }
    }

    const decreaseStake = () => {
      if (userInput.stake > 50) {
        
        userInput.stake = userInput.stake - 50;
      }
    }


    return {
      cardList,
      flipCard,
      userSelection,
      status,
      newPlayer,
      resText,
      userCanAddStake,
      playStake,
      userInput,
      increaseStake,
      decreaseStake,
      successColor,
      userFinishedSession,
      haveChosedStake,
      finalReward,
      startNewGame,
      autoplay
    }
  }
}
</script>

<template>
  <div class="main w-full h-full py-10 min-h-screen flex  justify-center ">
    <div class="body w-4/5 flex flex-col items-center gap-y-10">
      <div class="page-name w-full">
        <a href="/dashboard"><img src="../assets/img/game/page-name.svg" class="flex self-start" alt=""></a>
      </div>
      <p class="text-3xl text-white" :class="{'text-green-rabbit text-3xl text-white': successColor === true, 'text-red-rabbit ': successColor === false,}">{{resText}}</p>
      <GameBoard :cardList="cardList" :status="status" @flip-card="flipCard"  />

      <div id="addStake" class="w-full flex flex-col sm:flex-row gap-y-5 sm:justify-between items-center" v-if="userCanAddStake">
        <div class="inputStake row-flex gap-x-4 items-center">
          <button class="reduce stakeAction grid-center h-10 w-10" @click="decreaseStake"><p class="text-xl text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>  </p></button>

          <fieldset class="stakeAmount h-12 w-24 flex flex-row-reverse justify-center items-center px-3 gap-x-3">
            <legend class="text-xs text-white legend flex flex-row  ml-7 px-1 self-start  border-black">Stake</legend>
            <img src="../assets/img/tron-trx-logo.svg" class="w-6 h-5" alt="">
            <input type="text" class="h-4/5 text-white" disabled v-model="userInput.stake">
          </fieldset>

          <button class="increase stakeAction grid-center h-10 w-10" @click="increaseStake"><p class="text-xl text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></p></button>

        </div>
        <button class="grid-center bg-green-rabbit w-28 h-10 text-white" @click="playStake($store.state.user[0].userDetails._id)"><p class="text-sm">Play</p></button>
      </div>

      <div class="showStake w-full flex flex-col sm:flex-row gap-y-5 sm:justify-between items-center" v-if="haveChosedStake && !userFinishedSession">
        <fieldset class="stakeDetails h-12 w-24 flex flex-row-reverse justify-center items-center px-5 gap-x-1">
          <legend class="text-xs text-white legend flex flex-row  ml-4 px-1 self-start  border-black">Stake</legend>
          <img src="../assets/img/tron-trx-logo.svg" class="w-6 h-5" alt="">
          <p class="text-white">{{userInput.stake}}</p>
        </fieldset>

        <div class="flex flex-row gap-x-3 sm:gap-x-6 items-center ">
          <fieldset class="stakeAmount h-12 w-28 flex flex-row-reverse justify-center items-center px-3 gap-x-1">
            <legend class="text-xs text-white legend flex flex-row  ml-4 px-1 self-start  border-black">Reward</legend>
            <img src="../assets/img/tron-trx-logo.svg" class="w-6 h-5" alt="">
            <p class="text-white">{{userInput.stake * 2}}</p>
          </fieldset>

          <fieldset class="stakeDetails h-10 mt-2 w-36 flex flex-row-reverse justify-center items-center  gap-x-1 cursor-pointer" @click="autoplay">
            <p class="text-white text-sm">Auto-play</p>
          </fieldset>
        </div>
      </div>


      <div class="finishedSession w-full flex flex-row justify-center sm:justify-end items-center gap-x-5" v-if="userFinishedSession">
        <fieldset class="stakeAmount h-12 w-28 flex flex-row-reverse justify-center items-center px-3 gap-x-1">
          <legend class="text-xs text-white legend flex flex-row  ml-4 px-1 self-start  border-black">Reward</legend>
          <img src="../assets/img/tron-trx-logo.svg" class="w-6 h-5" alt="">
          <p class="text-white">{{finalReward}}</p>
        </fieldset>


        <button class="replay grid-center bg-green-rabbit w-28 h-10 text-white" @click="startNewGame"><p class="text-sm">Play Again</p></button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main {
  background: #090B13;
  font-family: Neue Machina;
}


.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}


.stakeAction {
  border: 1px solid #FFBB0D
}

.stakeAmount {
  border: 1px solid #08C052;
  transform: rotateY(180deg);
}
.stakeDetails {
  border: 1px solid #FFBB0D;
  transform: rotateY(180deg);
}
.stakeAmount input {
  width: 90px;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  transform: rotateY(180deg);

}
.stakeDetails img, .stakeDetails p, .stakeAmount img, .stakeAmount p {
  transform: rotateY(180deg);
}
.legend {
    transform: rotateY(180deg);

}

.shuffle-card-move {
  transition: transform 0.8s ease-in;
}
</style>
