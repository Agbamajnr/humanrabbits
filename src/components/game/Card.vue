<script>
import { computed } from 'vue'

export default {
  props: {
    matched: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const flippedStyles = computed(() => {
      if (props.visible) {
        return 'is-flipped'
      }
    })

    const selectCard = () => {
      context.emit('select-card', {
        position: props.position,
        faceValue: props.value
      })
    }

    return {
      flippedStyles,
      selectCard
    }
  }
}
</script>

<template>
  <div class="card relative" :class="flippedStyles" @click="selectCard">
    <div class="card-face is-front">
      <p class="text-6xl absolute top-2 right-3 text-white">0{{value}}</p>
      <img
        class="card-image"
        :srcset="`/images/rabbits/${value}@2x.svg 2x, /images/rabbits/${value}.svg 1x`"
        :src="`/images/rabbits/${value}.svg`"
        :alt="value"
      />
    </div>
    <div class="card-face is-back">
      <p class="text-6xl absolute top-2 right-3 text-white">0{{value}}</p>
      <img src="@/assets/img/logo.svg" alt="">
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
  transition: 0.5s transform ease-in;
  width: 305px;
  height: 344px;
  transform-style: preserve-3d;
  border: 1px solid #FFBB0D;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

.card-face.is-front {
  color: white;
  transform: rotateY(180deg);
}

.card-face.is-back {
  /* background-image: url('../../assets/img/game/front.svg'); */
  color: white;
}
.card-face.is-back:hover {
  transition: all .5s linear;
  cursor: pointer;
  background-image: url('../../assets/img/game/open-card.svg');
}

.card-image {
  max-width: 100%;
}

.icon-checkmark {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

@media screen and (max-width: 768px){
  .card {
    width: 100px;
    height: 112.79px;
  }
}
</style>
