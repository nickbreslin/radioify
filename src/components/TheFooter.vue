<template>
  <div class="footer mb-5 pt-5">
    <div class="row">
      <div class="col-9">
        <p class="m-0">
          Radioify made by
          <a href="https://www.nickbreslin.com">Nick Breslin</a>.
        </p>
        <p class="m-0">
          Proudly built with
          <a href="https://https://vuejs.org/">Vue</a> and
          <a href="https://getbootstrap.com/">Bootstrap</a>.
        </p>
      </div>
      <div class="col text-end">
        <button
          v-show="getToken"
          class="btn btn-link pt-0 mt-0"
          @click="clearToken()"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheFooter",
  data: function () {
    return {
      repository: process.env.VUE_APP_REPOSITORY,
      version: process.env.VUE_APP_VERSION,
    };
  },
  props: {
    payload: Object,
  },
  computed: {
    ...mapGetters(["getToken"]),
    year() {
      return new Date().getFullYear();
    },
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
a,
.btn-link {
  text-decoration: none;
}

a:hover,
.btn-link:hover {
  text-decoration: underline;
}
</style>
