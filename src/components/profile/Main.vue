<template>
  <div class="main-profile text-white flex flex-col gap-y-6 items-start  w-full h-full">
      <p class="comp-name w-full  flex flex-row self-start">Profile</p>
      <div class="user-info w-full  col-flex items-center gap-y-1">
        <img src="/images/rabbits/1.svg" class="w-36  avatar" alt="">
        <p class="text-xl font-3xl username mt-3">{{$store.state.user[0].userDetails.username}}</p>
        <p class="stats text-xs">{{$store.state.user[0].userDetails.userGameSessions}} Games, {{$store.state.user[0].currentBalance}} trx</p>
      </div>
      <span class="divider w-full mt-10"></span>
      <div class="links w-full gap-y-2 col-flex h-full justify-center">
        <div class="link px-4 row-flex justify-between items-center w-full h-12" @click="$emit('changeComp', 'edit-profile')">
          <p>Edit Profile</p>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
        <div class="link px-4 row-flex justify-between items-center w-full h-12" @click="$emit('changeComp', 'staking')">
          <p>NFT Staking</p>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
        <div class="link px-4 row-flex justify-between items-center w-full h-12" @click="$emit('changeComp', 'auto-play')">
          <p>Auto-Play</p>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
        <div class="link px-4 row-flex justify-between items-center w-full h-12" @click="$emit('changeComp', 'staking')">
          <p>Game-build</p>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
        <div class="link px-4 row-flex justify-between items-center w-full h-12" @click="logoutUser">
          <p>Logout</p>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import axios from 'axios'
export default {

  setup() {
    const router = useRouter();
    const logoutUser = async () => {
      const logout = await axios.post('https://humanrabbit.onrender.com/api/auth/logout', { withCredentials: true });

      setTimeout(() => {
        router.push('/login')
      }, 100);
      alert(logout.data.message);
    }
    return {logoutUser}
  }
}
</script>
<style>
  .main-profile {  
    font-family: 'Neue Machina';
  }
  .divider {
    border-bottom: 1px solid #333333;
  }
  .link {
    cursor: pointer;
    background: #333333;
  }
  .link p {
    font-size: 16px;
  }
</style>