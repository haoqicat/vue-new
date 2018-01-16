import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  loadPosts(state, posts) {
    state.all = posts
  }
}

const actions = {
  loadPosts({ commit }) {
    const uri = 'http://localhost:3008/posts'
    axios.get(uri).then(
      res => {
        const posts = res.data
        commit('loadPosts', posts)
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}
