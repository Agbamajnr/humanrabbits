<template>
  <div class="withdraw">
      <div class="modal w-full h-full col-flex items-center gap-y-7 p-7">
          <div class="row-flex justify-between w-full">
              <p class="text-xl font-bold w-full text-left">Withdraw Tron(Trx)</p>
              <svg @click="$emit('closeModal')" class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
            <input type="text" class="w-full input" placeholder="Enter Tron address(Trc20)" v-model="address">
            <div class="amount row-flex relative w-full h-full items-center">
                <input type="number" class="w-full h-full" placeholder="Enter amount" v-model="amount">
                <button class="max absolute right-2 text-white text-center font-bold text-green-rabbit">MAX</button>
            </div>
            <p class="text-xl text-left w-full">Available balance: <span class="text-green-rabbit">{{$store.state.user[0].wallet}}TRX</span></p>
            <p class="text-sm  text-left font-medium">Withdraw only to Tron(Trc20) address, failure to do so will result to loss of funds. </p>
            <p class="text-sm text-left font-bold" v-if="processing == 'Nothing'">{{withdrawInfo}}</p>
          <button class="withdraw-btn bg-green-rabbit w-full grid-center mt-5 text-white" @click="withdrawTrx($store.state.user[0].userDetails._id)">
            <p class="font-bold text-lg" v-if="processing == false">Withdraw</p>
            <img src="../assets/img/rolling.gif" v-if="processing == true" class="w-6 h-6" alt="">
            <p v-if="processing == 'Nothing'" class="font-bold text-lg">Request Sent</p>
          </button>
      </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import axios from 'axios'
export default {
  setup() {


      const url = 'https://humanrabbit.onrender.com/api'
      const address = ref('')
      const amount = ref()

      const processing = ref(false)
      const withdrawInfo = ref('')

      const withdrawTrx = async (userId) => {
          processing.value  = true;
          const data = reactive({
              id: userId,
              address: address.value,
              amount: amount.value
          })
          console.log(data);
          const response = await axios.post(url + '/blockchain/withdraw', data)

          processing.value = false
          
          withdrawInfo.value = response.data.message;
          processing.value  = 'Nothing'
      }

      return {address, amount, withdrawTrx, processing, withdrawInfo}
  }
}
</script>

<style scoped>
    .withdraw {
        max-width: 482px;
        max-height: 467px;
        height: 467px;
        width: 482px;
        opacity: 1;
    }
    .modal {
        background-color: #ffffff;
        opacity: 1;
    }
    .amount {
        height: 60px;
    }
    .input {
        height: 60px;
    }
    input {
        padding-left: 20px;
        background: #F5FEF9;
        border: 1px solid #08C052;
        box-sizing: border-box;
    }
    input::placeholder {
        color: #808081;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px
    }
    .withdraw-btn {
        height: 60px;
    }

    @media screen and (max-width: 768px){
        .deposit {
            width: 90%;
        }
    }
</style>