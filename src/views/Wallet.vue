<template>
  <div class="main flex justify-center w-full min-h-screen " ref="main">
      <div :class="{'deposit-modal h-full absolute w-full grid-center': depositModal === true, 'hidden': depositModal === false,}">
        <Deposit @closeModal="depositModal = false" class="m-auto my-auto bg-white"/>
      </div>
      <div :class="{'withdraw-modal h-full absolute w-full grid-center': withdrawModal === true, 'hidden': withdrawModal === false,}">
        <Withdraw @closeModal="withdrawModal = false" class="m-auto my-auto bg-white"/>
      </div>

      <Loader v-if="!$store.state.user[0]"/>
      <div class="body w-4/5  h-full py-5 flex flex-col" v-if="active_nav === false && $store.state.user[0]">
        <Header activeTab="wallet" @handleMnav="handleNav"/>

        <div class="wallet-info gap-x-7 gap-y-7 lg:gap-y-0 w-full h-full flex flex-col lg:flex-row mt-12">
            <div class="actions w-full lg:w-2/6 flex flex-col items-center gap-y-4 p-4 lg:p-8">
                <p>Wallet balance</p>
                <p class="text-2xl font-bold text-white">{{Math.floor($store.state.user[0].currentBalance)}} TRX</p>
                <button class="deposit-btn bg-green-rabbit w-full grid-center mt-5" @click="depositFunds"><p class="font-bold text-lg text-white">Deposit</p></button>
                <button class="withdraw-btn w-full grid-center mt-5" @click="withdrawFunds"><p class="font-bold text-lg text-white">Withdraw</p></button>
            </div>


            <div class="transactions w-full lg:w-4/6 h-full gap-y-5 flex flex-col">
                <p class="text-lg text-white w-full flex self-start m-4 lg:m-8">Transactions</p>
                <div class="h-full w-full flex flex-col items-start text-white text-left justify-start overflow-auto">
                    <table class="w-full table-auto" v-if="transactions.length > 0">
                        <tr class="">
                            <th class="ml-5">Date</th>
                            <th class="w-full">Transaction Type</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Transaction Status</th>
                        </tr>

                        <tr class="txn-data font-4xl"  v-for="txn in transactions" :key="txn">
                            <td class="w-full">{{txn.date}}</td> 
                            <td class="w-full">{{txn.type}}</td>
                            <td class="uppercase">{{txn._id}}</td>
                            <td v-if="txn.type == 'Lose Deducted'">-{{txn.amount}}TRX</td>
                            <td v-else-if="txn.type == 'Wallet Withdrawal'">-{{txn.amount}}TRX</td>
                            <td v-else>+{{txn.amount}}TRX</td>
                            <td class="text-green-rabbit">{{txn.statusInfo}}</td>
                        </tr>
                    </table>
                    <img src="../assets/img/transaction.svg" v-else  class="empty w-28 h-28 mx-auto my-auto" alt="No transactions">    
                </div>
            </div>
        </div>
      </div>


      <MobileNav @handleMnav="handleNav" v-if="active_nav === true"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'
import Deposit from '../components/Deposit.vue'
import { useStore } from 'vuex'
import axios from 'axios'
import Header from '../components/Header.vue'
import MobileNav from '../components/MobileNav.vue'
import Loader from '../components/Loader.vue'
import Withdraw from '../components/Withdraw.vue'
export default {
    components: {
        Deposit,
        Withdraw,
        MobileNav,
        Header,
        Loader
    },
    setup() {
        const main = ref()
        const active_nav = ref(false)
        const depositModal = ref(false)
        const withdrawModal = ref(false)

        const url = 'https://humanrabbit.onrender.com/api/auth'

        const store = useStore()
        const transactions = ref([])

        let userDetails = computed(() => {
            return store.state.user[0].userDetails
        })

        

        function getTxn() {
            userDetails.value.transactions.forEach(async (txn) => {
                const txnDetails = await axios.get(url + `/transaction/${txn}`)

                console.log(txnDetails);

                transactions.value.push(txnDetails.data.transaction)

            }) 
        }

        setTimeout(() => {
            getTxn()

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

        const depositFunds = () => {
            depositModal.value = !depositModal.value;
        }
        const withdrawFunds = () => {
            withdrawModal.value = !withdrawModal.value;
        }


        return {main, active_nav, handleNav, depositFunds, depositModal, withdrawFunds, withdrawModal, transactions}
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
        .transactions div::-webkit-scrollbar {
            display: none;
        }
    }
</style>