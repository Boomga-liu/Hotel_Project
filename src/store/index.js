import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomDetail: {},
    checkDate: {},
    guestData: {}
  },
  actions: {
    addAllData (context) {
      context.commit('GETDATA')
    }
  },
  mutations: {
    GETDATA (state) {
      state.roomDetail = JSON.parse(sessionStorage.getItem('roomDetail'))
      state.checkDate = JSON.parse(sessionStorage.getItem('range'))
      state.guestData = JSON.parse(sessionStorage.getItem('guestData'))
    }
  }
})
