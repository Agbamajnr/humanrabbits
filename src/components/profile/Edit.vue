<template>
  <div class="edit text-white flex flex-col gap-y-6 items-start  w-full h-full">
      <p class="comp-name w-full  flex flex-row self-start">Edit Profile</p>
      <div class="user-info w-full  col-flex items-center gap-y-1">
        <img src="/images/rabbits/1.svg" class="w-36  avatar" alt="">
        <p class="text-xl font-3xl username mt-3">{{$store.state.user[0].userDetails.username}}</p>
        <p class="stats text-xs">33 Games, {{$store.state.user[0].currentBalance}} trx</p>
      </div>
      <span class="divider w-full mt-10"></span>
      <div class="form w-full gap-y-8 col-flex h-full justify-center items-center">
        <input type="text" v-model="validateData.username" placeholder="New Username">
        <input type="number"  placeholder="Old Pin" v-model="validateData.oldPin">
        <input type="number" placeholder="New Pin" v-model="validateData.newPin">
        <button class="save-btn bg-green-rabbit  grid-center mt-5" @click="$emit('changeComp', 'main')"><p class="font-bold text-lg">Save</p></button>
      </div>
  </div>
</template>

<script>
import {reactive, computed, ref} from "vue"
import { useStore } from 'vuex'
import axios from 'axios'
export default {
  setup() {
    const validateData = reactive({
      username: '',
      oldPin: '',
      newPin: ''
    })

    const dataToSend = reactive({
      username: '',
      oldPin: '',
      newPin: ''
    })

    const errors = ref('')

    const validateInputAndSend = () => {
      if (validateData.username.toLowerCase().length > 1) {
        if (validateData.oldPin.toString().length === 4) {
          dataToSend.oldPin = validateData.oldPin;
        }
      }
    }
    

    const store = useStore()

    let userDetails = computed(() => {
      return store.state.user[0].userDetails
    })



      validateData.username = userDetails.value.username;


    return {validateData, errors, userDetails}
  }
}
</script>

<style>
  .avatar {
    border-radius: 55%;
  }
  .divider {
    border-bottom: 1px solid rgba(229, 229, 229, 0.56);
  }
  .link {
    cursor: pointer;
    background: rgba(229, 229, 229, 0.56);
  }

  /* form */

  input {
    height: 60px;
    width: 430px;
    padding-left:10px !important;
    background: #222325;
  }
  input::placeholder {
    color: #808081;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  .save-btn {
    height: 60px;
    width: 430px;
  }

  @media screen and (max-width: 768px) {
    .form {
        border: none !important;
        max-width: 474px;
        width: 100%;
        height: 100%;
    }
    .save-btn, input {
      width: 100%;
    }
  }
</style>