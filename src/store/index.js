import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import defaultBox from './modules/defaultBox'

Vue.use(Vuex)

const state = {
  view: "main",
  defaultBoxSn : "0",
  defaultBoxName : "받은메일함"
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    defaultBox
  }
})
