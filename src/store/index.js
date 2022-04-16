import { createStore } from 'vuex'

export default createStore({
  state: {
      authenticated: false,
      user: [],
  },
  mutations: {
      checkAuthState(state, data) {
          let {authState, userDetails } = data;
          state.authenticated = authState;
          state.user.push(userDetails)
      }
  },
  actions: {
      setAuth({commit}, {authState, userDetails}) {
          commit('checkAuthState', {authState, userDetails})
      }
  },
  modules: {
  }
})
