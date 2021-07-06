import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
    userId: "",
    playlists: [],
    tracks: [],
    playlistId: "",
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
    SET_PLAYLISTS(state, playlists) {
      console.log("SET_PLAYLISTS", playlists);
      state.playlists = playlists;
    },
    SET_TRACKS(state, tracks) {
      console.log("SET_TRACKS", tracks);
      state.tracks = tracks;
    },
    SET_ACTIVEPLAYLIST(state, playlistId) {
      console.log("SET_ACTIVEPLAYLIST", playlistId);
      state.tracks = [];
      state.playlistId = playlistId;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    setUserId({ commit }, userId) {
      commit("SET_USERID", userId);
    },
    setPlaylists({ commit }, playlists) {
      commit("SET_PLAYLISTS", playlists);
    },
    setTracks({ commit }, tracks) {
      commit("SET_TRACKS", tracks);
    },
    setActivePlaylist({ commit }, playlistId) {
      commit("SET_ACTIVEPLAYLIST", playlistId);
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
    getPlaylists(state) {
      let playlists = state.playlists;

      return playlists;
    },
    getTracks(state) {
      let tracks = state.tracks;

      return tracks;
    },
    getActivePlaylist(state) {
      let playlistId = state.playlistId;

      return playlistId;
    },
  },
  modules: {},
});
