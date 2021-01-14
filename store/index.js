export const state = () => ({
  tab: 0,
  polish: false,
})



export const mutations = {
  tab(state, value) {
    state.tab = value
  },
  polish(state, value) {
    state.polish = value
  }
}
