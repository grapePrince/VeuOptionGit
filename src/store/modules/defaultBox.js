const state = {
  mailboxList: []
}

// getters
const getters = {
  clickedMailbox: state => state.clickedMailbox
}

// actions
const actions = {
  clickMailBox ({ commit, state }, mailbox) {
    if (state.clickedMailbox != mailbox) {
      commit("CLICK_MAILBOX", mailbox)
    }
  }
}

// mutations
const mutations = {
  CLICK_MAILBOX (mailbox) {
    state.clickedMailbox = mailbox;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
