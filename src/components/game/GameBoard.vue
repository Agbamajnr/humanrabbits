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
    <transition-group tag="section" class="game-board gap-4 flex flex-row  w-full max-h-max" name="shuffle-card">
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
  flex: 2;
  max-width: 1600px !important;
  flex-wrap: wrap;
  flex-direction: row;
}

@media screen and (min-width: 1200px) {
  .game-board {
    max-height: 1024px !important;
  }
}

@media screen and (min-width: 500px) {
  .game-board {
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(4, 90px);
  }
}

@media screen and (min-width: 600px) {
  .game-board {
    grid-template-columns: repeat(4, 120px);
    grid-template-rows: repeat(4, 120px);
  }
}
</style>
