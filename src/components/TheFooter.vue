<template>
  <div class="footer mb-5 pt-3">
    <div class="row">
      <div class="col">
        <p class="m-0">
          Narrator made by
          <a href="https://www.nickbreslin.com">Nick Breslin</a>.
        </p>
        <p class="m-0">
          Proudly built with
          <a href="https://https://vuejs.org/">Vue</a> and
          <a href="https://getbootstrap.com/">Bootstrap</a>.
        </p>
      </div>
      <div class="col text-end">
        <button class="btn btn-link">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data: function () {
    return {
      repository: process.env.VUE_APP_REPOSITORY,
      version: process.env.VUE_APP_VERSION,
    };
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
