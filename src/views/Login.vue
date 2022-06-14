<template>
  <div class="main grid-center w-full py-24 gap-y-5 min-h-screen min-w-screen" ref="main">
    <img src="../assets/img/logo.svg" class="w-full h-10 lg:h-16 mb-8 lg:mb-0" alt="">
    <div class="form flex flex-col items-start gap-y-10 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">Sign-in</p>
        <p class="text-sm lg:text-lg text-left">Sign-in by keying in your email address and 4 digit pin</p>
        <input type="text" class="w-full" placeholder="Enter email address" autocomplete="on" name="email" v-model="validateData.email" required>
        <input type="number" class="w-full" placeholder="Enter 4 digit pin" autocomplete="on" name="password" v-model="validateData.pin" maxlength="4" minlength="4" required>
        <p class="text-red-700 font-bold" v-if="inputIssues.length > 1">{{inputIssues}}</p>
        <p class="w-full text-right"><a href="/forgot-pin" class="text-green-400 no-underline">Forgot password?</a></p>
        <p class="w-full text-left" v-if="loginInformation.length > 1">{{loginInformation}}</p>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5" @click="validateInput">
            <p class="font-bold text-lg" v-if="processing === false" >Next</p>
            <img src="../assets/img/rolling.gif" v-if="processing === true"  class="w-12 h-12" alt="">
            <p class="font-bold text-lg text-green-rabbit" v-if="statusInfo === true" type="submit" >Logged In</p>
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
    metaInfo: {
        title: 'Login',
    },
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
        const inputIssues = ref('')

        const signInUser = async () => {
            processing.value = true;
            const logUser = await axios.post(url + '/auth/login', data, { withCredentials: true })
            processing.value = false;
            loginInformation.value = logUser.data.message;

            if (logUser.data.message === 'Login Successful') {
                processing.value = 'nothing'
                statusInfo.value = true

                setTimeout(() => {
                    router.push('/profile')
                }, 500);
            } else statusInfo.value = false;
        }


        

        const validateData = reactive({
            email: '',
            pin: '',
        })

        const validateEmail = (email) => {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

        const validateInput = () => {
            if (validateEmail(validateData.email)) {
                if (validateData.pin.toString().length >= 2) {
                    data.pin = validateData.pin;
                    data.email = validateData.email;

                    signInUser();
                } else {
                    inputIssues.value = 'Invalid Pin'
                }
            } else inputIssues.value = 'Invalid Email'
        }

        return { loginInformation, statusInfo, processing, validateData, validateInput, inputIssues}
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