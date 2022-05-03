<template>
  <div v-if="$store.state.user[0]" class="overlay lg:hidden w-4/5 h-full py-5 flex flex-col min-h-screen">
    <div class="header flex flex-col items-center w-full justify-between text-white">
        <div class="top row-flex justify-between w-full">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <button class="text-xl font-bold" @click="$emit('handleMnav')">X</button>
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
</template>

<script>
import {ref, inject} from "vue"
export default {
    setup() {
        
    }
}
</script>

<style>

</style>