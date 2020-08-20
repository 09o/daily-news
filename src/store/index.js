import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 解决刷新页面store数据丢失的问题
  state: {
    date: '',
    baseData: [],
    themesData: [],
    newItem: []
  },
  mutations: {
    updateCurrentDate(state, payload) {
      state.date = payload
    },
    updateData(state, payload) {
      state.baseData = payload
    },
    updateThemes(state, payload) {
      state.themesData = payload
    },
    fullContent(state, nid) {
      state.newItem =  state.baseData.filter(r => r.id == nid);
    }
  }
})

export default store