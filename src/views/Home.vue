<template>
  <div class="main flex justify-center w-full min-h-screen" ref="main">
      <div class="body w-4/5 h-full py-5 flex flex-col" v-if="active_nav === false">
        <div class="header flex flex-row items-center w-full justify-between text-white">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <button class="mobile-nav lg:hidden block" @click="handleNav"><img src="../assets/img/nav.svg" alt=""></button>
            <div class="nav gap-x-6 lg:flex flex-row hidden">
                <a href="#packages"><p>Home</p></a>
                <a href="#"><p>Gameplay</p></a>
                <a href="#"><p>Staking</p></a>
                <a href="#"><p>Whitepaper</p></a>
            </div>
            <a :href="conditionedRoute" @click="changeRoute($store.state.authenticated)" class="lg:block hidden"><button class="grid-center bg-green-rabbit w-28 h-10 text-white"><p class="text-sm">Play Now</p></button></a>
        </div>

        <div class="hero mt-28  flex flex-col items-center justify-center gap-y-6 text-white">
            <p class="text-3xl lg:text-5xl w-full lg:w-4/5 font-bold text-white lg:px-8">Earn crypto by playing rabbit card game</p>
            <p class="w-full lg:w-3/5 lg:px-9 text-grey-300">Humanrabbit is a play to earn game where users stake tron for a game and earn in multiples of their stakes as they win</p>
            <a href="/login" class="w-full lg:w-auto"><button class="grid-center bg-green-rabbit w-full  lg:w-52 mt-6 h-10 text-white"><p class="text-sm font-bold">Play Now</p></button></a>
        </div>

        <div id="packages" class="packages w-full gap-y-5 lg:gap-x-5 flex flex-col lg:flex-row items-center justify-center mt-12">
            <div class="card pl-6 pt-5 pb-5 pr-6 lg:pr-2 bg-yellow-500 col-flex items-start gap-y-8 relative">
                <div class="card-rabbits gap-x-3 flex flex-row">
                    <div class="rab"><img src="../assets/img/rabs/1.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/2.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/3.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/img.svg" alt=""></div>
                </div>
                <p class="card-title text-xl font-semibold text-white">Card<span class="text-black">01</span></p>
                <p class="text-white text-2xl font-bold text-left">Play to earn: Discover the giant rabbit</p>
                <div class="rewards text-black row-flex items-start text-left gap-x-3">
                    <div>
                        <p>X2</p>
                        <p>Rewards package</p>
                    </div>
                    <div>
                        <p>50%</p>
                        <p>Return back</p>
                    </div>
                </div>
                <button class="availability mt-5 w-full lg:w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/green.svg" class="design-star absolute" alt="">
            </div>
            <div class="card pl-6 pt-5 pb-5 pr-6 lg:pr-2 bg-green-rabbit col-flex items-start gap-y-8 relative">
                <div class="card-rabbits gap-x-3 flex flex-row">
                    <div class="rab"><img src="../assets/img/rabs/1.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/2.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/3.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/img.svg" alt=""></div>
                </div>
                <p class="card-title text-xl font-semibold text-white">Card<span class="text-black">02</span></p>
                <p class="text-white text-2xl font-bold text-left">Play to earn: Discover the giant rabbit</p>
                <div class="rewards text-black row-flex items-start text-left gap-x-3">
                    <div>
                        <p>X2</p>
                        <p>Rewards package</p>
                    </div>
                    <div>
                        <p>50%</p>
                        <p>Return back</p>
                    </div>
                </div>
                <button class="availability mt-5 w-full lg:w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/yellow.svg" class="design-star absolute" alt="">
            </div>
            <div class="card pl-6 pt-5 pb-5 pr-6 lg:pr-2 bg-purple-500 col-flex items-start gap-y-8 relative">
                <div class="card-rabbits gap-x-3 flex flex-row">
                    <div class="rab"><img src="../assets/img/rabs/1.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/2.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/3.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/img.svg" alt=""></div>
                </div>
                <p class="card-title text-xl font-semibold text-white">Card<span class="text-black">03</span></p>
                <p class="text-white text-2xl font-bold text-left">Play to earn: Discover the giant rabbit</p>
                <div class="rewards text-black row-flex items-start text-left gap-x-3">
                    <div>
                        <p>X2</p>
                        <p>Rewards package</p>
                    </div>
                    <div>
                        <p>50%</p>
                        <p>Return back</p>
                    </div>
                </div>
                <button class="availability mt-5 w-full lg:w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/white.svg" class="design-star absolute" alt="">
            </div>

            <div class="card pl-6 pt-5 pb-5 pr-6 lg:pr-2 bg-pink-500 col-flex items-start gap-y-8 relative">
                <div class="card-rabbits gap-x-3 flex flex-row">
                    <div class="rab"><img src="../assets/img/rabs/1.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/2.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/3.svg" alt=""></div>
                    <div class="rab"><img src="../assets/img/rabs/img.svg" alt=""></div>
                </div>
                <p class="card-title text-xl font-semibold text-white">Card<span class="text-black">04</span></p>
                <p class="text-white text-2xl font-bold text-left">Play to earn: Discover the giant rabbit</p>
                <div class="rewards text-black row-flex items-start text-left gap-x-3">
                    <div>
                        <p>X2</p>
                        <p>Rewards package</p>
                    </div>
                    <div>
                        <p>50%</p>
                        <p>Return back</p>
                    </div>
                </div>
                <button class="availability mt-5 w-full lg:w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/white.svg" class="design-star absolute" alt="">
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
                <a href="/"><p>Home</p></a>
                <a href="/dashboard"><p>Gameplay</p></a>
                <a href="/dashboard"><p>Staking</p></a>
                <a href="#"><p>Whitepaper</p></a>
                <a href="#" class="mt-8"><button disabled class="grid-center bg-green-rabbit w-40 h-16 text-white"><p class="text-sm font-bold">Play Now</p></button></a>
            </div>
        </div>
      </div>
  </div>
</template>



<script>
import {ref, reactive} from 'vue'
export default {
    setup() {
        const main = ref()
        const active_nav = ref(false)

        const conditionedRoute = ref('')

        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }

        const changeRoute = (auth) => {
            if (auth === true) {
                conditionedRoute.value = '/dashboard'
                
            } else conditionedRoute.value = '/login'
        }


        return {main, active_nav, handleNav, conditionedRoute, changeRoute}
    }
}
</script>

<style scoped>
    .main {
        background: #090B13;
        font-family: Neue Machina;
    }
    .card {
        width: 335px;
        height: 424px;
        font-family: 'Oxanium', cursive !important;
    }
    .rab {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: gray;
    }
    .availability {
        border: 1px solid black;
    }
    .design-star {
        width: 50px;
        height: 50px;
        bottom: 0;
        right: -3px;
    }
</style>