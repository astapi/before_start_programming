import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    isNavbarActive: false,
    activePage: '',
  },
  mutations: {
    toggleNavbar(state) {
      state.isNavbarActive = !state.isNavbarActive;
    },
    resetNabvar(state) {
      state.isNavbarActive = false;
    }
  }
})

export default store