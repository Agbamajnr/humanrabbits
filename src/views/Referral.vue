<template>
  <div class="main flex justify-center w-full min-h-screen " ref="main">
    <Loader v-if="!$store.state.user[0]"/>
      <div class="body w-4/5  h-full py-5 flex flex-col" v-if="active_nav === false && $store.state.user[0]">
        <Header activeTab="referral" @handleMnav="handleNav"/>

        <div class="referral-info gap-x-7 gap-y-7 lg:gap-y-0 w-full h-full justify-center flex flex-col lg:flex-row mt-12">
            <div class="actions w-full lg:w-2/6 flex flex-col items-center gap-y-4 p-4 lg:p-8">
                <p>Refferals</p>
                <p class="text-2xl font-bold text-white">{{$store.state.user[0].userDetails.userReferrals.length}}</p>
                <button class="deposit-btn bg-green-rabbit w-full grid-center mt-5" @click="copyLink(`https://humanrabbits.com/join/${$store.state.user[0].userDetails.referralCode}`)">
                    <p class="font-bold text-lg text-white" v-if="!linkCopied">Copy Link</p>
                    <p class="font-bold text-lg text-white" v-if="linkCopied">Copied</p>
                </button>
                <button class="referral-link text-xs overflow-hidden w-full grid-center mt-5 px-1"><p class="font-bold text-lg text-white">https://humanrabbits.com/{{$store.state.user[0].userDetails.referralCode}}</p></button>
            </div>


            <div class="referrals w-full lg:w-3/6 h-full gap-y-5 flex flex-col">
                <p class="text-lg text-white w-full flex self-start m-4 lg:m-8">Refferal earnings</p>
                <div class="h-full w-full flex flex-col items-start text-white text-left justify-start overflow-auto">
                    <table class="w-full table-auto" v-if="referrals.length > 0">

                        <tr class="txn-data font-4xl"  v-for="rf in referrals" :key="rf">
                            <td>{{rf.userReffered}}</td> 
                            <td>{{rf.dateReffered}}</td>
                            <td>{{rf.referralEarnings}}TRX</td>
                            <td class="text-green-rabbit">Success</td>
                        </tr>
                    </table>
                    <img src="../assets/img/transaction.svg" v-else class="empty w-28 h-28 mx-auto my-auto" alt="No transactions">    
                </div>
            </div>
        </div>
      </div>


      <MobileNav @handleMnav="handleNav" v-if="active_nav === true"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'
import { useStore } from 'vuex'
import copy from 'copy-to-clipboard3';
import Header from '../components/Header.vue'
import Loader from '../components/Loader.vue'
import MobileNav from '../components/MobileNav.vue'
import axios from 'axios'
export default {
    components: {
        Header,
        Loader,
        MobileNav
    },
    metaInfo: {
        title: 'Referral',
        meta: {
            name: 'description',
            content: 'Refer new users and earn now'
        }
    },
    setup() {
        const url = 'https://humanrabbit.onrender.com/api';

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
            userDetails.value.userReferrals.forEach(async (rf) => {
                const rfDetails = await axios.get(url + `/auth/referral/${rf}`)

                console.log(rfDetails);

                referrals.value.push(rfDetails.data.referral)
                console.log(referrals.value);

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
    .referrals div::-webkit-scrollbar {
        height: .6rem;
    }
    .referrals div::-webkit-scrollbar-track {
        background: #fff;
        border-radius:8px;
    }
    .referrals div::-webkit-scrollbar-thumb {
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
        width: 100%;
        overflow-x:hidden;
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
        .referrals {
            max-height: 400px !important;
            height: 400px !important;
        }
    }
</style>