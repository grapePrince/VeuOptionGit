import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import defaultBox from './modules/defaultBox'

Vue.use(Vuex)

const state = {
  view: "main", // main, mailbox, 
  defaultBoxSn : "0",
  defaultBoxName : "받은메일함",
  senderName : "아주기이이이이ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ이이이인보내는사람이름",
  useMobileSign : true,
  currentmobileSign : "moooobiiiile",
  fontSize : "S",
  pageType : "P",
  viewType : "P",
  fitScreen : "checked",
  useFlicking : "",
  timeZone : "+9"
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    defaultBox
  }
})
