<template>
  <router-view/>
</template>

<script>
import { ref } from 'vue';
import {reactive } from "vue"
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from "axios"


export default{
  setup() {
    // const userHasAutoplay = true;
    // let userStake = 50;

    // const wordsBank = ['die', "pity", "suffer", "sad"]
    // const matchingWords = ['die', "pity", "suffer", "sad", "confused", "party", "nice", "cover", 'die', "pity", "suffer", "sad"]

    // function random(mn, mx) {
    //     return Math.random() * (mx - mn) + mn;
    // }

    // function matchRandomWords() {
    //   let randomWord = matchingWords[Math.floor(random(1, matchingWords.length))]

    //   const matchedWords = wordsBank.filter(word => word == randomWord)

    //   console.log(matchedWords);

    //   console.log(randomWord);
    // }

    // matchRandomWords();

    const router = useRouter();
    
    const store = useStore();
      const getUser = async () => {
        try {
          const cookies = await axios.get('https://humanrabbit.onrender.com/api/auth/checkCookies', { withCredentials: true });
          if(cookies.data === true) {
            const res = await axios.get('https://humanrabbit.onrender.com/api/auth/user', { withCredentials: true })
            await store.dispatch('setAuth', {authState: true, userDetails: res.data});
          } else  {
            await store.dispatch('setAuth', false);
          }

        } catch (error) {
          await store.dispatch('setAuth', false);
        }
      }

      getUser();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  width: 12px;
  height: 12px;
  
  & .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

</style>
