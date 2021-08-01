<template>
  <Header>
    <div class="row">
      <div class="col-9">
        <h1 class="h3">
          Radioify for
          <img
            class="logo"
            src="@/assets/spotify/Spotify_Logo_RGB_Green.png"
            alt="Spotify Logo"
          />
        </h1>
      </div>
      <div class="col mt-4 text-end">
        <button
          v-show="getToken"
          class="btn btn-link pt-0 mt-0"
          @click="clearToken()"
        >
          Logout
        </button>
      </div>
    </div>
  </Header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheHeader",
  props: {},
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
    ...mapActions(["setToken"]),
    clearToken() {
      this.setToken("");
      this.$router.push({ name: "Main" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 200px;
  vertical-align: bottom;
}

a,
.btn-link {
  text-decoration: none;
}

a:hover,
.btn-link:hover {
  text-decoration: underline;
}
</style>
