<template>
  <div class="main flex justify-center w-full min-h-screen " ref="main">
      <Loader v-if="!$store.state.user[0]"/>
      <div class="body w-4/5  h-full py-5 flex flex-col gap-y-12" v-if="active_nav === false && $store.state.user[0]">
        <Header activeTab="profile" @handleMnav="handleNav"/>

        <div class="profile-cont w-full sm:w-4/5 lg:w-3/5 h-full self-center flex flex-col mt-12 p-7">
            <component :is="component" @changeComp="changeCurrComp"></component>
        </div>
      </div>


      <MobileNav @handleMnav="handleNav" v-if="active_nav === true"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import Loader from '../components/Loader.vue'

import Edit from '../components/profile/Edit.vue'
import Autoplay from '../components/profile/Autoplay.vue'
import Header from '../components/Header.vue'
import MobileNav from '../components/MobileNav.vue'
import Staking from '../components/profile/Staking.vue'

import Main from '../components/profile/Main.vue'

export default {
    components: {
        Loader,
        MobileNav,
        Header,
        'edit-profile': Edit,
        'main': Main,
        'auto-play': Autoplay,
        'staking': Staking
    },
    setup() {
        const main = ref()
        const active_nav = ref(false)

        const component = ref('main')

        const url = 'https://humanrabbit.onrender.com/api/auth'

        const store = useStore()

        let userDetails = computed(() => {
            return store.state.user[0].userDetails
        })


        const handleNav = () => {
            active_nav.value = !active_nav.value;
            if(active_nav.value == true) {
                main.value.style.overflow = "hidden";
            }
            if(active_nav.value == false) {
                main.value.style.overflow = "initial";
            }
        }

        const changeCurrComp = comp => {
            component.value = comp
        }


        return {main, active_nav, handleNav, component, changeCurrComp}
    }
}
</script>

<style scoped>
    .main {
        background: #090B13;
        opacity: 1;
        height: 100% !important;
        font-family: Neue Machina;
    }

    .body {
        background: #090B13;
    }
    .profile-cont {
        border: 1px solid rgba(229, 229, 229, 0.56);
        max-width: 853px;
        max-height: 869px;
        height: 869px;
    }
    .active {
        border-bottom: 1px solid #08C052;
        border-bottom-width: 3px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    @media screen and (min-width: 1500px) {
        .body {
            width: 60%;
        }
    }
</style>