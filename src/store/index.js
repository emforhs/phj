import Vue from 'vue'
import Vuex from 'vuex'

import layout from './module/layout'
import albums from './module/albums'

Vue.use(Vuex)

// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       layout,
//       albums
//     },
//   })

//   return Store
// }
export default new Vuex.Store({
  modules: {
    layout,
    albums
  }
})
