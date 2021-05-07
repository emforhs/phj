import VueRouter from 'vue-router'
import axios from 'axios'

const state = () => ({
})

const getters = {
}

const actions = {
  async getAlbums({commit, dispatch, state }, payload) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        return res.data;
      } catch (error) {
          console.log('Request Error', error)
      }
  },
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}