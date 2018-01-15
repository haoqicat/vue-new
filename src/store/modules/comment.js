const state = {
  all: [
    {
      id: '1',
      body: '评论1'
    },
    {
      id: '2',
      body: '评论2'
    }
  ]
}

const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  }
}

const actions = {
  addComment({ commit }, { comment } ) {
    console.log('I am a action', comment)
    commit('addComment', comment)
  }
}

export default {
  state,
  mutations,
  actions
}
