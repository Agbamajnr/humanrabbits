<template>
<div class="form flex flex-col items-start gap-y-10 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">Signup</p>
        <p class="text-sm lg:text-lg text-left">Complete the signup process by creating a username and adding refferal code</p>
        <input type="text" class="w-full" placeholder="Create username" v-model="email">
        <input type="text" class="w-full" placeholder="Refferal code (optional)" v-model="password">
        <p>By clicking “Next” you agree to <a href="Terms and conditions" class="text-green-400 underline">Terms and conditions</a></p>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5"><p class="font-bold text-lg" @click="$emit('last-step')">Next</p></button>
        <p class="text-center flex  self-center">Already have an account?<a href="/login" class="text-green-400 underline ml-1">Sign in</a></p>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
  .form {
        width: 542px;
        height: 664px;

        background: #090B13;
        border: 1px solid rgba(229, 229, 229, 0.56);
        box-sizing: border-box;
    }
    input {
        height: 60px;
        padding-left: 20px;
        background: #222325;
    }
    input::placeholder {
        color: #808081;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px
    }
    .next-btn {
        height: 60px;
    }

    @media screen and (max-width: 768px) {
        .form {
            border: none !important;
            max-width: 474px;
            width: 100%;
            height: 100%;
        }
    }
</style>