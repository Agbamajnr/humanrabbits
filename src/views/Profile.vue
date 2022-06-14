<template>
  <div class="main flex  justify-center items-center w-full min-h-screen" ref="main">
      <h1 class="text-4xl text-white">Redirecting...</h1>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {onMounted} from 'vue'
import axios from 'axios'
export default {
    setup() {
        const router = useRouter();
        onMounted(async () => {
            const cookies = await axios.get('https://humanrabbit.onrender.com/api/auth/checkCookies', { withCredentials: true });

            if (cookies.data === true) {
                setTimeout(() => {
                    router.push('/dashboard')
                }, 500);
            } else router.push('/login')
        })

    },
}
</script>

<style scoped>
    .main {
        background: #090B13;
        font-family: Neue Machina;
    }
</style>