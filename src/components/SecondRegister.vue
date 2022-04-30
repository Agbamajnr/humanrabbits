<template>
<div class="form flex flex-col items-start gap-y-10 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">Signup</p>
        <p class="text-sm lg:text-lg text-left">Complete the signup process by creating a username and adding refferal code</p>
        <input type="text" class="w-full" placeholder="Create username" v-model="secondData.username">
        <input type="text" class="w-full" placeholder="Refferal code (optional)" v-model="secondData.referralCode">
        <p class="text-red-500">{{statusInfo}}</p>
        <p>By clicking “Next” you agree to <a href="Terms and conditions" class="text-green-400 underline">Terms and conditions</a></p>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5"  @click="$emit('last-step', secondData), processing = true, getRegisterDetails()">
            <p class="font-bold text-lg" v-if="processing == false">Next</p>
            <img src="../assets/img/rolling.gif" v-else class="w-6 h-6" alt="">
        </button>
        <p class="text-center flex  self-center">Already have an account?<a href="/login" class="text-green-400 underline ml-1">Sign in</a></p>
    </div>
  
</template>

<script>
import {ref, reactive, inject, computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default {
    setup() {
        const secondData = reactive({
            username: '',
            referralCode: '',
        })
        const route = useRoute();

        const statusInfo = ref('')

        const processing = ref(false)
        let status = ref(inject("registeringUser"))
        
        const details = computed(() => {
            return status.value
        })

        const getRegisterDetails = () => {
            console.log("first", details.value);
            setTimeout(() => {
                if (details.value != undefined) {
                    if (details.value.errorMsg === "OK") {
                        processing.value = false;
                    } else {
                        processing.value = false;
                        statusInfo.value = details.value.message;
                    }
                }
            }, 4500);
        }

        if (route.params.rfCode) {
            let code = route.params.rfCode
            secondData.referralCode = code.toString();

            console.log(secondData);
        }
        
        

        return {secondData, processing, statusInfo, getRegisterDetails}
    }
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