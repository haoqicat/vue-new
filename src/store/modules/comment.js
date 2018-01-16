import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  },
  loadComments(state, comments) {
    state.all = comments
  }
}

const actions = {
  addComment({ commit }, { comment } ) {
    console.log('I am a action', comment)
    const uri = 'http://localhost:3008/comments'
    axios.post(uri, comment).then(res => {
      console.log('res', res.data)
      const comment = res.data
      commit('addComment', comment)
    })
  },
  loadComments({ commit }) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res => {
        console.log('res.data', res.data)
        const comments = res.data
        commit('loadComments', comments)
      }
    )
    console.log('I am a action')
  }
}

export default {
  state,
  mutations,
  actions
}
