<template>
  <div class="main w-full py-9 grid-center min-h-screen">
    <div @click="handleNav" :class="{'overlay min-h-screen absolute fixed h-screen top-0 w-full': activeNav === true, 'overlay min-h-screen hidden absolute fixed h-screen top-0 w-full': activeNav === false,}">
      <a href="/about-us"><button class="btn-3 hidden place-items-center bg-white mx-auto mt-24"><p class="font-bold">Join Waitlist</p></button></a>
    </div>
    <div class="body w-full col-flex h-full px-6 sm:px-24">
      <div class="header w-full row-flex justify-between items-center">
        <p class="text-primary font-bold" style="font-size: 24px;">Pay<span class="text-black">loan</span></p>
        <button class="btn bg-primary sm:grid place-items-center hidden text-white text-sm">Join Waitlist</button>
        <button class=" h-8 w-11 mobile-btn items-center flex m-2 sm:hidden justify-center flex-col gap-y-2" @click="handleNav">
          <div class="w-7 h-1 bg-primary"></div>
          <div class="w-7 h-1 bg-primary"></div>
        </button>
      </div>
      
      <div class="hero mt-16 sm:mt-24 flex flex-col w-full gap-y-8 sm:gap-x-24">
          <p class="w-full sm:w-1/2 font-bold heading text-left">What we are building?</p>
          <div class="article flex-col flex gap-y-6">
              <p>Think what happens to bolt and uber users when stranded with payment OR you are stranded in a mall with no money to pay for the goods or services. At this point you are panic on what to do, don’t think too much. Payloan will pay for you with no collateral needed. </p>
              <p>Payloan offers fast payloan to users immediately at any point in time with no collateral. We are providing an easy wallet to receive loans and pay loans. </p>
              <p>Payloan fights sapa for you, you deserve na easy life</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {router} from 'vue-router'
export default {
    setup() {
        const activeNav = ref(false)

        const handleNav = () => {
        activeNav.value = !activeNav.value
        }

        return {activeNav, handleNav}
    }
}
</script>

<style scoped>
 .main {
    background: #F1F1F1;
 }
 .mobile-btn {
    border: #F2F0FF;
    border-radius: 20px;
    border: 2px solid #D5CEFF;
    box-sizing: border-box;
  }
  .heading {
    font-weight: 800;
    font-size: 64px;
    line-height: 85px;
    /* or 133% */


    color: #030112;

  }
  .article p {
    text-align: left;
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 170%;
    /* identical to box height, or 41px */


    color: #0A1045;

  }
  .overlay {
    opacity: 0.7;
    background-color: #1c1c1c;
    transition: all .7s linear;
  }

  @media screen and (max-width: 425px) {
      .heading {
          font-size: 36px;
          line-height: 50px;
      }
      .article p {
          font-size: 18px;
          line-height: 170%;
      }
  }
</style>