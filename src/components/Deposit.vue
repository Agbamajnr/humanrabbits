<template>
  <div class="deposit">
      <div class="modal w-full h-full col-flex items-center gap-y-9 p-7">
          <div class="row-flex justify-between w-full">
              <p class="text-xl font-bold w-full text-left">Deposit Tron(TRX)</p>
              <svg @click="$emit('closeModal')" class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
          <qrcode-vue :value="$store.state.user[0].userDetails.trxAddress" level="H" :size="230"></qrcode-vue>
          <div class="address row-flex relative w-full h-full items-center">
              <p class="text-sm text-left pl-2">{{$store.state.user[0].userDetails.trxAddress}}</p>
              <button class="copy absolute right-1 bottom-1 text-white text-center" @click="copyAddress($store.state.user[0].userDetails.trxAddress)"><p v-if="addressCopied === false">Copy</p><p v-if="addressCopied === true">Copied</p></button>
          </div>
      </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import QrcodeVue from 'qrcode.vue'
import copy from 'copy-to-clipboard3';
export default {
    components: {
    QrcodeVue,
  },
  setup() {
      const addressCopied = ref(false)
      const copyAddress = (addr) => {
          copy(addr)
          addressCopied.value = true;
      }

      return {copyAddress, addressCopied}
  }
}
</script>

<style scoped>
    .deposit {
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
    .address {
        background: #F5FEF9;
        border: 1px solid #08C052;
        box-sizing: border-box;
        height: 45px;
    }
    .copy {
        background: #08C052;
        width: 80px;
        height: 35px;
    }

    @media screen and (max-width: 768px){
        .deposit {
            width: 90%;
        }
    }
</style>