<template>
  <div class="autoplay text-white flex flex-col gap-y-6 items-start  w-full h-full">
      <p class="comp-name w-full  flex flex-row self-start">Autoplay</p>
      <div class="user-info w-full  col-flex items-center gap-y-1">
        <img src="/images/rabbits/1.svg" class="w-36  avatar" alt="">
        <p class="text-xl font-3xl username mt-3">{{$store.state.user[0].userDetails.username}}</p>
        <p class="stats text-xs">33 Games, {{$store.state.user[0].currentBalance}} trx</p>
      </div>
      <span class="divider w-full mt-10"></span>
      <p class="text-sm">Auto-play is an undefined technology created to play for the user. An AI assisted technology meant totake necessary moves in humanrabbit game and other SDk games developed on this platform. Users can enable or disable it. </p>

      <div class="form w-full gap-y-16 col-flex h-full  justify-center items-center">
        <div class="input row-flex justify-between items-center px-5 cursor-pointer" @click="changeState">
            <p>Auto-play</p>
            <p class="state">{{message}}</p>
        </div>
        <button class="save-btn bg-green-rabbit  grid-center mt-5" @click="$emit('changeComp', 'main')"><p class="font-bold text-lg">Save</p></button>
      </div>
  </div>
</template>

<script>
import {reactive, computed, ref} from "vue"
export default {

  setup() {
    const autoplayState = ref(false)
    const message = ref('no')

    

    const changeState = () => {
        autoplayState.value = !autoplayState.value

        if (autoplayState.value) {
            message.value = 'yes';
        } else {
            message.value = 'no';
        }

        console.log(autoplayState.value, message.value);
    }

    return {autoplayState, changeState, message}
  }
}
</script>
<style>
  .autoplay {  
    font-family: 'Neue Machina';
  }
  .divider {
    border-bottom: 1px solid #333333;
  }

  .input {
    height: 60px;
    width: 430px;
    padding-left:10px !important;
    background: #222325;
  }
  .save-btn {
    height: 60px;
    width: 430px;
  }

  @media screen and (max-width: 768px) {
    .form {
        border: none !important;
        max-width: 474px !important;
        width: 100%;
        height: 100%;
    }
    .save-btn, .input {
      width: 100% !important;
    }
  }
</style>