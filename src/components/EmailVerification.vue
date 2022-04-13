<template>
  <div class="form flex flex-col items-start gap-y-7 text-white p-7 lg:bordered border-none">
        <p class="text-xl lg:text-2xl font-semibold ">OTP authentication</p>
        <p class="text-sm lg:text-lg text-left">Please enter the 5 digit OTP code that was sent to <a href="" class="text-green-400 underline">johndoe@gmail.com</a></p>
        <div id="otp" class="flex flex-row gap-x-3 w-full">
            <input type="text" v-model="val1" @input="next" />
            <input type="text" v-model="val2" @input="next" />
            <input type="text" v-model="val3" @input="next" />
            <input type="text" v-model="val4" @input="next" />
            <input type="text" v-model="val5" @input="next" />
            <input type="text" v-model="val6" @input="next" />
        </div>
        <button class="next-btn bg-green-rabbit w-full grid-center mt-5"><p class="font-bold text-lg">Verify Code</p></button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val1: null,
      val2: null,
      val3: null,
    };
  },
  methods: {
    next(e) {
      e.target?.nextSibling?.focus();
    },
  },
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