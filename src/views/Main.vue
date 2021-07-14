<template>
  <div class="card card-body">
    <router-link class="btn btn-primary" :to="{ name: 'Playlists' }"
      >Log In</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  created() {},
};
</script>

<style scoped>
.card-body {
  max-width: 420px;
}
</style>
