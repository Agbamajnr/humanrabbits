<template>
  <div class="main w-full py-9 grid-center min-h-screen">
    <div @click="handleNav" :class="{'overlay min-h-screen absolute fixed h-screen top-0 w-full': activeNav === true, 'overlay min-h-screen hidden absolute fixed h-screen top-0 w-full': activeNav === false,}">
      <a href="/about-us"><button class="btn-3 hidden place-items-center bg-white mx-auto mt-24"><p class="font-bold">Learn more</p></button></a>
    </div>
    <div class="body w-full col-flex h-full px-6 sm:px-24">
      <div class="header w-full row-flex justify-between items-center">
        <p class="text-primary font-bold" style="font-size: 24px;">Pay<span class="text-black">loan</span></p>
        <a href="/about-us"><button class="btn bg-primary sm:grid place-items-center hidden text-white text-sm">Learn More</button></a>
        <button class=" h-8 w-11 mobile-btn items-center flex m-2 sm:hidden justify-center flex-col gap-y-2" @click="handleNav">
          <div class="w-7 h-1 bg-primary"></div>
          <div class="w-7 h-1 bg-primary"></div>
        </button>
      </div>

      <div class="hero mt-16 sm:mt-24 flex flex-col sm:flex-row items-center justify-between w-full sm:gap-x-24">
        <div class="hero-details col-flex items-center justify-center sm:gap-y-10 w-full h-full sm:w-3/6 sm:h-4/5 gap-y-7">
          <div class="head heading sm:text-6xl text-4xl sm:text-left col-flex w-full">
            Payment made easy with easy loan
            <img src="../assets/img/Vector.svg" class="sm:w-36 w-24 line self-center  sm:self-start  " alt="">
          </div>
          <p class="subheading sm:text-2xl text-lg  sm:text-left text-center ">Payloan is a digital bank that gives loan for payment with no calleteral needed. No money with you, no wahala, You deserve the Easy Life.</p>
          <div class="mail-input flex sm:flex-row flex-col self-center items-center sm:self-start sm:bg-white p-2 w-full">
            <input type="text" class="input w-4/5 " placeholder="Email Address">
            <button class="btn-2 bg-primary sm:mt-0 mt-6 text-white">Join Waitlist</button>
          </div>
        </div>
        <div class="hero-img w-4/6 items-center hidden justify-center sm:flex sm:flex-col h-full">
          <img src="../assets/img/img.svg" class="img-hero" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import {router} from 'vue-router'
  export default {
    name: 'Waiting',
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
  .hero {
    max-height: 600px;
  }
  .hero-img {
    max-width: 553px;
    max-height: 600px;
  }
  input[type="text"] {
    outline: none;
    padding-left: 20px ;
  }
  .mobile-btn {
    border: #F2F0FF;
    border-radius: 20px;
    border: 2px solid #D5CEFF;
    box-sizing: border-box;
  }
  .overlay {
    opacity: 0.7;
    background-color: #1c1c1c;
    transition: all .7s linear;
  }

  @media screen and (max-width: 1024px) {
    .hero-details {
      width: 90%;
    }
    .hero-img {
      display: none;
    }
    .head {
      font-size: 40px;
      line-height: 54px;
    }
    .line {
      display: none;
    }
    .subheading {
      font-size: 18px;
    }
  }

  @media screen and (max-width:768px) {
    input[type="text"] {
      height: 50px;
    }
    .line {
      align-self: flex-end;
      width: 100px;
    }
  }


  @media screen and (max-width: 425px){

    input[type="text"] {
      height: 50px;
      width: 335px;
    }
    .head {
      line-height: 60px;
    }
    .hero {
      max-height: 800px;
      align-items: center;
    }
    .line {
      display: initial;
      align-self: center !important;
    }
    
  }
  @media screen and (max-width: 390px) {
    input[type="text"] {
      width: 260px !important;
    }
  }

  @media screen and (min-width: 1440px) {
    .line {
      align-self: end;
    }
  }
  

</style>
