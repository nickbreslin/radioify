import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";
import axios from "axios";

import Main from "../views/Main";
import Playlists from "../views/Playlists";
import Tracks from "../views/Tracks";
import Callback from "../views/Callback";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    beforeEnter: checkAuthToken,
  },
  {
    path: "/playlists",
    name: "Playlists",
    component: Playlists,
    beforeEnter: getAuthToken,
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks,
    beforeEnter: getAuthToken,
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
    beforeEnter: getAuthToken,
  },
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function checkAuthToken(to, from, next) {
  if (store.getters.getToken) {
    next({ name: "Playlist", replace: true });
  }
  console.log("No Auth!");
  next();
}

function getAuthToken(to, from, next) {
  console.log("GetAuthToken", args);

  if (store.getters.getToken) {
    console.log("gettting....", store.getters.getToken);
    next();
  }

  if (!args.access_token) {
    console.log("no auth....", store.getters.getToken);
    fetchAuth();
    next({ name: "Main", replace: true });
  }

  store.dispatch("setToken", args.access_token);
  getUserInfo();
  next({ name: "Playlist", replace: true });
}

function fetchAuth() {
  console.log("Fetching Auth...");

  const url = "https://accounts.spotify.com/authorize";

  let params = {
    client_id: "c1cabc977ad84b46af06f35e1f3699a8",
    response_type: "token",
    redirect_uri: "http://localhost:8080/callback",
    state: "xyz",
    scope: "playlist-modify-public",
  };

  const search = new URLSearchParams(params).toString();

  console.log("Fetching auth....", `${url}?${search}`);

  window.location.href = `${url}?${search}`;
}

function getUserInfo() {
  console.log("Get User Info...", store.getters.getToken);

  const url = `https://api.spotify.com/v1/me`;
  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.getters.getToken}`,
    },
  };

  axios.get(url, options).then((response) => {
    console.log("My Info", response);
    store.dispatch("setUserId", response.data.id);
  });
}

/*
 * https://stackoverflow.com/questions/50962507/vuejs-handle-url-fragment-to-action-without-vue-router-and-without-jquery
 */
var args = (function () {
  var returnVal = {};

  var argString = window.location.hash;
  //everything after src belongs as part of the url, not to be parsed
  var argsAndSrc = argString.split(/src=/);
  returnVal["src"] = argsAndSrc[1];
  //everything before src is args for this page.
  var argArray = argsAndSrc[0].split("&");
  for (var i = 0; i < argArray.length; i++) {
    var nameVal = argArray[i].split("=");
    //strip the hash
    if (i == 0) {
      var name = nameVal[0];
      nameVal[0] = name.slice(1);
    }
    returnVal[nameVal[0]] = decodeURI(nameVal[1]);
  }
  return returnVal;
})();

export default router;
