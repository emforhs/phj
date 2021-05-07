import VueRouter from 'vue-router'
import axios from 'axios'

const state = () => ({
  layout:[
    {"x":0,"y":0,"w":2,"h":10,"i":"0", static: false},
    {"x":2,"y":0,"w":2,"h":10,"i":"1", static: false},
    {"x":4,"y":0,"w":2,"h":10,"i":"2", static: false},
    {"x":6,"y":0,"w":2,"h":10,"i":"3", static: false}
  ]
})

const getters = {
  layout: (state) => {
    return state.layout
  },
}

const actions = {
  addLayout({commit, dispatch, state }, payload) {
    commit('layoutAdd',payload);
  },
  updateLayout({commit, dispatch, state }, payload) {
    commit('layoutUpdate',payload);
  },
  delLayout({commit, dispatch, state }, payload) {
    commit('layoutDel',payload);
  }
}

const mutations = {
  layoutAdd (state, payload) {
    state.layout.push(payload);
  },
  layoutUpdate(state, payload){
    state.layout[payload.idx] = payload.obj;
  },
  layoutDel(state, payload){
    state.layout.splice(payload.idx,1);
    state.layout.forEach(el,idx => {
      el.i = idx;
    });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}