<template>
  <div class="main grid-center w-full py-24 gap-y-5 min-h-screen min-w-screen" ref="main">
    <img src="../assets/img/logo.svg" class="w-full h-10 lg:h-16 mb-8 lg:mb-0" alt="">
    <div class="form flex flex-col items-start gap-y-10 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">Forgot pin</p>
        <p class="text-sm lg:text-lg text-left">Please provide your email address to create a new pin</p>
        <p class="font-bold text-lg text-red-600" v-if="processing == 'not-started'" >{{inputIssues}}</p>
        <input type="text" class="w-full" placeholder="Email address" v-model="data.email">
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5" @click="resetWithEmail" :disabled="processing === true">
            <p class="font-bold text-lg" v-if="processing === false" >Next</p>
            <img src="../assets/img/rolling.gif" v-if="processing === true"  class="w-12 h-12" alt="">
            <p class="font-bold text-xl" v-if="processing == 'done'" >{{result}}</p>
        </button>
        <p class="text-center flex text-lg font-bold  self-center"><a href="/login" class="text-green-400 no-underline">Go back</a></p>
    </div>
  </div>
</template>


<script>
import {ref, reactive} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        const url = 'https://humanrabbit.onrender.com/api/auth/reset-pin'

        const data = reactive({
            email: ''
        })

        const router = useRouter()

        const processing = ref(false)
        const result = ref('')
        const inputIssues = ref('')

        const validateEmail = (email) => {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }

        const resetWithEmail = async () => {
            if (validateEmail(data.email)) {
                if (data.email.length > 5) {
                    processing.value = true;
                    const endData = await axios.post(url, data);
                    if (endData.data.message === 'Email is not registered') {
                        processing.value = 'not-started'
                        inputIssues.value = endData.data.message

                        setTimeout(() => {
                            processing.value = false
                        }, 2000)
                    } else {
                        result.value = endData.data.message;
                        processing.value = 'done'

                        setTimeout(() => {
                            router.push('/login')
                        }, 2000)
                    }
                    
                }
            } else {
                processing.value = 'not-started'
                inputIssues.value = 'Invalid Email'

                setTimeout(() => {
                    processing.value = false
                }, 2000)
            }
        }

        return { resetWithEmail, processing, data, result, inputIssues}
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
        height: 100%;

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