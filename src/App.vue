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
    const store = useStore();
      const getUser = async () => {
        try {
          const cookies = await axios.get('https://humanrabbit.onrender.com/api/auth/checkCookies', { withCredentials: true });
          console.log(cookies.data);
          if(cookies.data === true) {
            const res = await axios.get('https://humanrabbit.onrender.com/api/auth/user', { withCredentials: true })

            await store.dispatch('setAuth', {authState: true, userDetails: res.data});
          } else  await store.dispatch('setAuth', false);

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
</style>
