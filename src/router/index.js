import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";
import axios from "axios";

import Main from "../views/Main.vue";
import Callback from "../views/Callback.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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

function getAuthToken(to, from, next) {
  console.log("GetAuthToken", args);

  if (!args.access_token) {
    fetchAuth();
    next();
    return false;
  }

  console.log("Token Present...", args.access_token);

  store.dispatch("setToken", args.access_token);
  getUserInfo();
  next();
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
