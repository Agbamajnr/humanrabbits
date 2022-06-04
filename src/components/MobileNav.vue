<template>
  <div class="overlay lg:hidden w-4/5 h-full py-5 flex flex-col min-h-screen">
    <div class="header flex flex-col items-center w-full justify-between text-white">
        <div class="top row-flex justify-between w-full">
            <div class="logo">
                 <a href="/"><img src="../assets/img/logo.svg" alt=""></a>
            </div>
            <button class="text-xl font-bold" @click="$emit('handleMnav')"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
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