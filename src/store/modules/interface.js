

export default {
  namespaced: true,
  state: {
    drawer: false,
    groupNameError: false,
    snackbarVisible: false
  },
  actions: {
    toggleDrawer (context) {
      context.commit('SET_DRAWER', !context.state.drawer)
    },
    setGroupNameError (context, s) {
      context.commit('SET_GROUP_NAME_ERROR', s)
    },
    setSnackBar (context, s) {
      context.commit('SET_SNACK_BAR',s)
    }
  },
  mutations: {
    SET_DRAWER (state, s) {
      state.drawer = s
    },
    SET_GROUP_NAME_ERROR (state, s) {
      state.groupNameError = s
    },
    SET_SNACK_BAR (state, s) {
      state.snackbarVisible = s
    }
  }

}