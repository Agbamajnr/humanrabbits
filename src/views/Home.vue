<template>
  <div class="main grid place-items-center w-full min-h-screen">
      <div class="body w-4/5 h-full py-5 flex flex-col">
        <div class="header flex flex-row items-center w-full justify-between text-white">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <div class="nav gap-x-6 flex flex-row">
                <a href="#"><p>Home</p></a>
                <a href="#"><p>Gameplay</p></a>
                <a href="#"><p>Staking</p></a>
                <a href="#"><p>Whitepaper</p></a>
            </div>
            <a href="#"><button class="grid-center bg-green-rabbit w-28 h-10 text-white"><p class="text-sm">Play Now</p></button></a>
        </div>

        <div class="hero mt-28  flex flex-col items-center justify-center gap-y-6 text-white">
            <p class="text-5xl w-4/5 font-bold text-white px-8">Earn crypto by playing rabbit card game</p>
            <p class="w-3/5 px-9 text-grey-300">Humanrabbit is a play to earn game where users stake tron for a game and earn in multiples of their stakes as they win</p>
            <a href="#"><button class="grid-center bg-green-rabbit w-52 mt-6 h-10 text-white"><p class="text-sm">Play Now</p></button></a>
        </div>

        <div class="packages w-full gap-x-5 flex flex-row items-center justify-center mt-12">
            <div class="card pl-6 pt-5 pb-5 bg-yellow-500 col-flex items-start gap-y-8 relative">
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
                <button class="availability mt-5 w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/green.svg" class="design-star absolute" alt="">
            </div>
            <div class="card pl-6 pt-5 pb-5 pr-2 bg-green-rabbit col-flex items-start gap-y-8 relative">
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
                <button class="availability mt-5 w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/yellow.svg" class="design-star absolute" alt="">
            </div>
            <div class="card pl-6 pt-5 pb-5 pr-2 bg-purple-500 col-flex items-start gap-y-8 relative">
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
                <button class="availability mt-5 w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/white.svg" class="design-star absolute" alt="">
            </div>

            <div class="card pl-6 pt-5 pb-5 pr-2 bg-pink-500 col-flex items-start gap-y-8 relative">
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
                <button class="availability mt-5 w-56 text-white h-8 border-black"><p>Available Now</p></button>
                <img src="../assets/img/designs/white.svg" class="design-star absolute" alt="">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

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