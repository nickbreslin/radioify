import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
    userId: "",
  },
  mutations: {
    SET_TOKEN(state, token) {
      console.log("SET_TOKEN", token);
      state.token = token;
    },
    SET_USERID(state, userId) {
      console.log("SET_USERID", userId);
      state.userId = userId;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    setUserId({ commit }, userId) {
      commit("SET_USERID", userId);
    },
  },
  getters: {
    getToken(state) {
      let token = state.token;

      return token;
    },
    getUserId(state) {
      let userId = state.userId;

      return userId;
    },
  },
  modules: {},
});
