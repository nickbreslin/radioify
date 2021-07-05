<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1 class="h3">
          Radioify for
          <img class="logo" src="@/assets/Spotify_Logo_RGB_Green.png" />
        </h1>
        <router-view />
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  components: {},
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.logo {
  width: 200px;
  vertical-align: bottom;
}
div {
  border: 1px solid red;
}
</style>
