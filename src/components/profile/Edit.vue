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
        <button class="save-btn bg-green-rabbit  grid-center mt-5" @click="validateInputAndSend">
          <p class="font-bold text-lg" v-if="processing == false">Save</p>
          <p class="font-bold text-lg" v-if="processing == 'Nothing'">{{msg}}</p>
          <img src="../../assets/img/rolling.gif" v-if="processing == true" class="w-6 h-6" alt="">
        </button>
      </div>
      <p class="text-red-800">{{errors}}</p>
  </div>
</template>

<script>
import {reactive, computed, ref} from "vue"
import { useStore } from 'vuex'
import axios from 'axios'
export default {
  setup(props, ctx) {
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

    const store = useStore()

    let userDetails = computed(() => {
      return store.state.user[0].userDetails
    })

    const errors = ref('')
    const msg = ref('')
    const processing = ref(false)

    const validateInputAndSend = async () => {
      processing.value = true
      if (validateData.username.toLowerCase().length > 1) {
        dataToSend.username = validateData.username;
        if (validateData.oldPin.toString().length === 4) {
          dataToSend.oldPin = validateData.oldPin;

          if (validateData.newPin.toString().length === 4) {
            dataToSend.newPin = validateData.newPin;

            const result = await axios.put('https://humanrabbit.onrender.com/api/auth/user/' + userDetails.value._id, dataToSend)

            if (result.data.message == "Username And Pin Changed") {
              processing.value = 'Nothing'
              msg.value = 'Saved'

              setTimeout(() => {
                ctx.emit('changeComp', "main")
              }, 1500);
            } else {
              processing.value = false
              errors.value = result.data.message;
            }
          }
        }
        
      }
    }
    

    



      validateData.username = userDetails.value.username;


    return {validateData, errors, msg, processing, userDetails, validateInputAndSend}
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