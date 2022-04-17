<template>
  <div class="form flex flex-col items-start gap-y-7 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">OTP authentication</p>
        <p class="text-sm lg:text-lg text-left">Please enter the 5 digit OTP code that was sent to <a href="" class="text-green-400 underline">{{details.email}}</a></p>
        <div id="otp" class="flex flex-row gap-x-3 w-full">
            <input type="text" v-model="val1" @input="next" />
            <input type="text" v-model="val2" @input="next" />
            <input type="text" v-model="val3" @input="next" />
            <input type="text" v-model="val4" @input="next" />
            <input type="text" v-model="val5" @input="next" />

        </div>
        <p class="text-sm lg:text-lg text-left">{{validatedInfo}}</p>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5" @click="validateAuthCode"><p v-if="userVerified === false" class="font-bold text-lg">Verify Code</p> <p v-else class="font-bold text-lg row-flex gap-x-5">Verified</p> </button>
    </div>
</template>

<script>
import axios from 'axios'
import { inject, ref, reactive, onBeforeMount } from 'vue'
import {useRouter} from 'vue-router'

export default {
  setup() {
      const url = 'https://humanrabbit.onrender.com/api';

      const userVerified = ref(false); //manages user verification state

      const router = useRouter();
      

      let details = inject("registeringUser");

      console.log(details);

      const data = reactive({
        id: details.value._id
      })

      const validatedInfo = ref('')

      const val1 = ref()
      const val2 = ref()
      const val3 = ref()
      const val4 = ref()
      const val5 = ref()


      const otpCode = ref()

      const verifyUser = ( async() => {
        const getOtpCode = await axios.post(url + '/auth/verifyUser', data);
        otpCode.value = getOtpCode.data.authCode;
      })

      verifyUser();

      const validateAuthCode =async () => {
        const otpInput = [val1.value, val2.value, val3.value, val4.value, val5.value].join('');
        if (otpInput.length === 5 && otpCode.value.length === 5) {
          if (otpInput === otpCode.value) {
            validatedInfo.value = 'User Verified Succesfully';
            userVerified.value = true;

            setTimeout(() => {
              router.push('/login')
            }, 2000);
          } else {
            validatedInfo.value = 'Incorrect Otp Code';
          } 
        } else validatedInfo.value = 'OTP Input not Complete';

        if (userVerified.value === true) {
          const makeUserVerified = await axios.put(url + `/auth/changeUserVerificationState/${details.value._id}`);
        }
      }



      const next = (e) => {
        e.target?.nextSibling?.focus();
      }


      return {details, next, val1, val2, val3, val4, val5, validateAuthCode, validatedInfo, userVerified }
    }
};
</script>

<style scoped>
    .form {
        width: 542px;
        max-height: 409px;
        background: #090B13;
        border: 1px solid rgba(229, 229, 229, 0.56);
        box-sizing: border-box;
    }
    input {
        width: 65px;
        height: 60px;
        text-align: center;
        background: #222325;
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