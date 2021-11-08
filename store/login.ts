export const state = () => ({
  list: [],
})

export const mutations = {
  // The method which stores the given data into the state
  setUser(state: any, list: any) {
    if (list && !list.error) {
      state.list = list
    }
  },
}
