<template>
  <div class="main grid-center w-full py-24 gap-y-5 min-h-screen min-w-screen" ref="main">
    <img src="../assets/img/logo.svg" class="w-full h-10 lg:h-16 mb-8 lg:mb-0" alt="">
    <component :is="component" @next-step="getFirstData" @last-step="getSecondData"></component>
  </div>
</template>



<script>
import FirstStep from '../components/FirstRegister.vue'
import SecondStep from '../components/SecondRegister.vue'
import LastStep from '../components/EmailVerification.vue'


import {ref, reactive, onBeforeMount, provide, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'

export default {
    components: {
        'first-step':FirstStep,
        'second-step':SecondStep,
        'last-step': LastStep

    },
    setup () {
        const component = ref('first-step')

        const url = 'https://humanrabbit.onrender.com/api'

        const data = reactive({
            email: ''.toLowerCase(),
            pin: '',
            username: '',
        })

        const VerifyEmail = ref('')

        const getFirstData = async (firstData) => {
            data.email = firstData.email,
            data.pin =  firstData.pin

            component.value = 'second-step';
        }

        const userDetails = ref()

        const getSecondData = async (secondData) => {
            data.username = secondData.username;

            const createUser = await axios.post(url + '/auth/register', data)

            userDetails.value = createUser.data;
            
            component.value = 'last-step';
        }

        
        const userRegisterDetails= computed(() => {
            return userDetails.value;
        })

        console.log(userRegisterDetails);
        
        provide("registeringUser", userRegisterDetails)





        return {component, getFirstData, getSecondData}
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
            border: none !important;
            max-width: 474px;
            width: 100%;
            height: 100%;
        }
    }
</style>