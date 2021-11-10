import { GraphType } from "@/typings/graph"

export default {
  namespaced: true,
  state: {
    token: 'tests',
    color: '',
    graph: { id: "", length: "", width: "" }
  },
  mutations: {
    //存储token
    setToken(state: { token: string }, token: string) {
      state.token = token
      localStorage.token = token
    },
    setColor(state: { color: string }, color: string) {
      state.color = color
    },
    setGraph(state: { graph: GraphType }, graph: GraphType) {
      state.graph = graph
    }
  },
  getters: {
    //获取token方法
    getToken(state: { token: string | null }) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    },
    getGraph(state: { graph: string | null }) {
      return state.graph
    }

  },
  // actions: {
  //   aEdit(context, payload) {
  //     setTimeout(() => {
  //       context.commit('edit', payload)
  //     }, 2000)
  //   }
  // }
}