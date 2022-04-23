<template>
  <div class="main grid-center w-full py-24 gap-y-5 min-h-screen min-w-screen" ref="main">
    <img src="../assets/img/logo.svg" class="w-full h-10 lg:h-16 mb-8 lg:mb-0" alt="">
    <div class="form flex flex-col items-start gap-y-10 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">Sign-in</p>
        <p class="text-sm lg:text-lg text-left">Sign-in by keying in your email address and 4 digit pin</p>
        <input type="text" class="w-full" placeholder="Enter email address" v-model="data.email" required>
        <input type="number" class="w-full" placeholder="Enter 4 digit pin" v-model="data.pin" maxlength="8" minlength="4" required>
        <p class="w-full text-right"><a href="Terms and conditions" class="text-green-400 no-underline">Forgot password?</a></p>
        <p class="w-full text-left">{{loginInformation}}</p>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5" @click="signInUser">
            <p class="font-bold text-lg" v-if="processing === false" type="submit" >Next</p>
            <img src="../assets/img/rolling.gif" v-if="processing === true"  class="w-6 h-6" alt="">
            <p class="font-bold text-lg" v-if="statusInfo === true" type="submit" >Logged In</p>
        </button>
        <p class="text-center flex  self-center">Don’t have an account?<a href="/register" class="text-green-400 underline ml-1">Sign up</a></p>
    </div>
  </div>
</template>



<script>
import {ref, reactive} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        const url = 'https://humanrabbit.onrender.com/api'
        const data = reactive({
            email: '',
            pin: ''
        })

        const router = useRouter();

        const processing = ref(false)
        const loginInformation = ref('');
        const statusInfo = ref(false)

        const signInUser = async () => {
            processing.value = true;
            const logUser = await axios.post(url + '/auth/login', data, { withCredentials: true })
            processing.value = false;
            loginInformation.value = logUser.data.message;
            console.log(loginInformation.value);

            if (logUser.data.message === 'Login Successful') {
                processing.value = 'nothing'
                statusInfo.value = true

                setTimeout(() => {
                    router.push('/dashboard')
                }, 3000);
            } else statusInfo.value = false;
        }

        return {data, signInUser, loginInformation, statusInfo, processing}
    }
}


</script>

<style scoped>
    .main {
        background: #090B13;
        font-family: Neue Machina;
    }
    .form {
        width: 542px;
        height: 659px;

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
            max-width: 474px;
            border: none !important;
            width: 100%;
            height: 100%;
        }
    }
</style>