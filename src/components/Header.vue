<template>
  <div class="header flex flex-row items-center w-full justify-between text-white">
        <div class="logo">
            <a href="/"><img src="../assets/img/logo.svg" alt=""></a>
        </div>
        <button class="mobile-nav lg:hidden block" @click="$emit('handleMnav')"><img src="../assets/img/nav.svg" alt=""></button>
        <div class="nav gap-x-6 lg:flex flex-row hidden">
            <a href="/dashboard" :class="{'active': activeTab === 'dashboard'} "><p>Games</p></a>
            <a href="/wallet" :class="{'active': activeTab === 'wallet'} "><p>Wallet</p></a>
            <a href="/dashboard/profile" :class="{'active': activeTab === 'profile'} "><p>Profile</p></a>
            <a href="/referral" :class="{'active': activeTab === 'referral'} "><p>Referrals</p></a>
        </div>
        <a href="#" class="lg:block hidden"><button disabled class="grid-center bg-green-rabbit w-28 h-10 text-white"><p class="text-sm">{{Math.floor($store.state.user[0].wallet)}} trx</p></button></a>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    props: {
        activeTab: String
    },
    setup(props) {
        const activeTab = ref(props.activeTab)

        return {activeTab}
    }
}
</script>

<style scoped>
.active {
    border-bottom: 1px solid #08C052;
    border-bottom-width: 3px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>