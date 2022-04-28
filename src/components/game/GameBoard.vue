<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  props: {
    cardList: {
      type: Array,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const selectCard = payload => {
      ctx.emit('flip-card', payload)
    }

    return {
      selectCard
    }
  }
}
</script>

<template>
    <transition-group tag="section" class="game-board gap-4 flex flex-row justify-center items-center sm:justify-start sm:items-start  w-full max-h-max" name="shuffle-card">
      <Card
        v-for="card in cardList"
        :key="`${card.value}-${card.variant}`"
        :matched="card.matched"
        :value="card.value"
        :visible="card.visible"
        :position="card.position"
        @select-card="selectCard"
      />
    </transition-group>
</template>

<style scoped>
.status {
  font-family: 'Titillium Web', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
}

.game-board {
  display: flex;
  flex: 3;
  max-width: 1600px !important;
  flex-wrap: wrap;
  flex-direction: row;
}

@media screen and (min-width: 1200px) {
  .game-board {
    max-height: 1024px !important;
  }
}

/* @media screen and (max-width: 768px) {
  .game-board {
    
  }
}

@media screen and (max-width: 500px) {
  .game-board {
    
  }
} */
</style>
