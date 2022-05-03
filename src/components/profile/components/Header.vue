<template>
    <div class="user-info w-full  col-flex items-center gap-y-1" v-if="userDetails !== undefined ">
        <img src="/images/rabbits/1.svg" class="w-36  avatar" alt="">
        <p class="text-xl font-3xl username mt-3">{{userDetails.username}}</p>
        <p class="stats text-xs">33 Games, {{userDetails.currentBalance}} trx</p>
    </div>
</template>

<script>
import {reactive, computed, ref} from "vue"
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    
    if (store.state.user[0].userDetails !== undefined) {
        
    }

    let userDetails = computed(() => {
      return store.state.user[0].userDetails
    })

    console.log(userDetails);


    return {userDetails}
  }
}
</script>

<style>
  .avatar {
    border-radius: 55%;
  }
  .stats {
    color: #808081;
    font-style: normal;
    font-weight: 400;
  }
</style>