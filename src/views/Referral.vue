<template>
  <div class="main flex justify-center w-full min-h-screen " ref="main">
      <div class="body w-4/5  h-full py-5 flex flex-col" v-if="active_nav === false">
        <div class="header flex flex-row items-center w-full justify-between text-white">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <button class="mobile-nav lg:hidden block" @click="handleNav"><img src="../assets/img/nav.svg" alt=""></button>
            <div class="nav gap-x-6 lg:flex flex-row hidden">
                <a href="/dashboard"><p>Games</p></a>
                <a href="/wallet"><p>Wallet</p></a>
                <a href="#"><p>Profile</p></a>
                <a href="/referral" class="active"><p>Referrals</p></a>
            </div>
            <a href="#" class="lg:block hidden"><button disabled class="grid-center bg-green-rabbit w-28 h-10 text-white"><p class="text-sm">{{Math.floor($store.state.user[0].wallet)}} trx</p></button></a>
        </div>

        <div class="referral-info gap-x-7 gap-y-7 lg:gap-y-0 w-full h-full justify-center flex flex-col lg:flex-row mt-12">
            <div class="actions w-full lg:w-2/6 flex flex-col items-center gap-y-4 p-4 lg:p-8">
                <p>Refferals</p>
                <p class="text-2xl font-bold text-white">0</p>
                <button class="deposit-btn bg-green-rabbit w-full grid-center mt-5" @click="copyLink(`http://localhost:8080/join/${$store.state.user[0].userDetails.referralCode}`)">
                    <p class="font-bold text-lg text-white" v-if="!linkCopied">Copy Link</p>
                    <p class="font-bold text-lg text-white" v-if="linkCopied">Copied</p>
                </button>
                <button class="referral-link text-xs overflow-hidden w-full grid-center mt-5 px-1"><p class="font-bold text-lg text-white">http://localhost:8080/join/{{$store.state.user[0].userDetails.referralCode}}</p></button>
            </div>


            <div class="referrals w-full lg:w-3/6 h-full gap-y-5 flex flex-col">
                <p class="text-lg text-white w-full flex self-start m-4 lg:m-8">Refferal earnings</p>
                <div class="h-full w-full flex flex-col items-center text-white text-left justify-center overflow-auto">
                    <table class="w-full table-auto" v-if="referrals.length > 1">

                        <tr class="txn-data font-4xl"  v-for="rf in referrals" :key="rf">
                            <td>{{rf.userReferred}}</td> 
                            <td>{{rf.userReferring}}</td>
                            <td>{{txn.referralEarnings}}TRX</td>
                            <td class="text-green-rabbit">Success</td>
                        </tr>
                    </table>
                    <img src="../assets/img/transaction.svg" class="empty w-28 h-28" alt="No transactions">    
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
                <a href="/dashboard"><p>Games</p></a>
                <a href="/wallet"><p>Wallet</p></a>
                <a href="/dashboard/profile"><p>Profile</p></a>
                <a href="/referral"><p>Referrals</p></a>
                <a href="#" class="mt-8"><button disabled class="grid-center bg-green-rabbit w-36 h-12 text-white"><p class="text-sm">{{Math.floor($store.state.user[0].wallet)}} trx</p></button></a>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'
import Deposit from '../components/Deposit.vue'
import { useStore } from 'vuex'
import copy from 'copy-to-clipboard3';
import axios from 'axios'
import Withdraw from '../components/Withdraw.vue'
export default {
    components: {
        Deposit,
        Withdraw
    },
    setup() {
        const main = ref()
        const active_nav = ref(false)

        const store = useStore()

        const linkCopied = ref(false)
        const copyLink = (link) => {
            copy(link)
            linkCopied.value = true;
        }
        const referrals = ref([])

        let userDetails = computed(() => {
            return store.state.user[0].userDetails
        })

        

        function getReferrals() {
            userDetails.value.userReferrals.forEach(async (txn) => {
                const rfDetails = await axios.get(url + `/transaction/${txn}`)

                console.log(rfDetails);

                referrals.value.push(rfDetails.data.referral)

            }) 
        }

        setTimeout(() => {
            getReferrals()

        }, 3000);



        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }


        return {main, active_nav, handleNav, copyLink, linkCopied, referrals}
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
    .referral-link {
        height: 60px;
        border: 1px solid #08C052;
    }
    .referrals {
        max-height: 861px;
        height: 861px;
        border: 1px solid rgba(229, 229, 229, 0.56);
    }
    .transactions div::-webkit-scrollbar {
        height: .6rem;
    }
    .transactions div::-webkit-scrollbar-track {
        background: #fff;
        border-radius:8px;
    }
    .transactions div::-webkit-scrollbar-thumb {
        background: #08C052;
        border-radius:8px;
    }
    .empty {
        border: none !important;
    }
    .deposit-modal {
        transition: all .7s linear;
        height: 100% !important;
    }

    table {
        width: 120%;
        overflow-x: scroll;
    }
    tr {
        border-bottom: 5px solid #090B13;
    }

    th, td {
        padding-left: 35px;
        padding-top: 10px;
        padding-bottom: 10px;

    }

    .active {
        border-bottom: 1px solid #08C052;
        border-bottom-width: 3px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .txn-data {
        background: #282828;
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