<template>
  <div class="main flex justify-center w-full min-h-full " ref="main">
      <div :class="{'deposit-modal h-full absolute w-full grid-center': depositModal === true, 'hidden': depositModal === false,}">
        <Deposit @closeModal="depositModal = false" class="m-auto my-auto bg-white"/>
    </div>
      <div class="body w-4/5  h-full py-5 flex flex-col" v-if="active_nav === false">
        <div class="header flex flex-row items-center w-full justify-between text-white">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <button class="mobile-nav lg:hidden block" @click="handleNav"><img src="../assets/img/nav.svg" alt=""></button>
            <div class="nav gap-x-6 lg:flex flex-row hidden">
                <a href="/dashboard"><p>Games</p></a>
                <a href="/wallet" class="active"><p>Wallet</p></a>
                <a href="#"><p>Bonus</p></a>
                <a href="#"><p>Referrals</p></a>
            </div>
            <a href="#" class="lg:block hidden"><button disabled class="grid-center bg-green-rabbit w-28 h-10 text-white"><p class="text-sm">{{$store.state.user[0].wallet}} trx</p></button></a>
        </div>

        <div class="wallet-info gap-x-7 gap-y-7 lg:gap-y-0 w-full h-full flex flex-col lg:flex-row mt-12">
            <div class="actions w-full lg:w-2/6 flex flex-col items-center gap-y-4 p-8">
                <p>Wallet balance</p>
                <p class="text-2xl font-bold text-white">{{$store.state.user[0].wallet}} TRX</p>
                <button class="deposit-btn bg-green-rabbit w-full grid-center mt-5" @click="depositFunds"><p class="font-bold text-lg text-white">Deposit</p></button>
                <button class="withdraw-btn w-full grid-center mt-5"><p class="font-bold text-lg text-white">Withdraw</p></button>
            </div>
            <div class="transactions w-full lg:w-4/6 h-full grid-center p-8">
                <p class="text-lg text-white w-full flex self-start">Transactions</p>
                <div class="h-full w-full flex flex-col items-center">
                    <img src="../assets/img/transaction.svg" class="empty w-28 h-28" alt="">    
                </div>
            </div>
        </div>
      </div>


      <div :class="{'overlay lg:hidden w-4/5 h-full py-5 flex flex-col min-h-screen': active_nav === true, 'hidden': active_nav === false,}">
          <div class="header flex flex-col items-center w-full justify-between text-white">
            <div class="top row-flex justify-between w-full">
                <div class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>
                <button class="text-xl font-bold" @click="handleNav">X</button>
            </div>
            <div class="mt-16 gap-y-8 flex flex-col text-xl">
                <a href="#"><p>Games</p></a>
                <a href="#"><p>Wallet</p></a>
                <a href="#"><p>Bonus</p></a>
                <a href="#"><p>Referrals</p></a>
                <a href="#" class="mt-8"><button disabled class="grid-center bg-green-rabbit w-36 h-12 text-white"><p class="text-sm">$20</p></button></a>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import Deposit from '../components/Deposit.vue'
export default {
    components: {
        Deposit
    },
    setup() {
        const main = ref()
        const active_nav = ref(false)
        const depositModal = ref(false)

        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }

        const depositFunds = () => {
        depositModal.value = !depositModal.value;
      }


        return {main, active_nav, handleNav, depositFunds, depositModal}
    }
}
</script>

<style scoped>
    .main {
        background: #090B13;
        opacity: 1;
        height: 100% !important;
        font-family: Neue Machina;
    }
    .body {
        background: #090B13;
    }
    .actions {
        height: 384px;
        border: 1px solid rgba(229, 229, 229, 0.56);
    }
    .deposit-btn {
        height: 60px;
    }
    .withdraw-btn {
        height: 60px;
        border: 1px solid #08C052;
    }
    .transactions {
        max-height: 861px;
        height: 861px;
        border: 1px solid rgba(229, 229, 229, 0.56);
    }
    .empty {
        border: none !important;
    }
    .deposit-modal {
        transition: all .7s linear;
        height: 100% !important;
    }

    .active {
        border-bottom: 1px solid #08C052;
        border-bottom-width: 3px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    @media screen and (min-width: 1500px) {
        .body {
            width: 60%;
        }
    }

    @media screen and (max-width: 768px) {
        .transactions {
            max-height: 400px !important;
            height: 400px !important;
        }
    }
</style>