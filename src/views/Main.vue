<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <p class="mb-5">
        Radioify is a Spotify-integrated application to generate radio-edit,
        non-explicit versions of your playlists.
      </p>
      <div class="card card-body">
        <router-link
          class="btn btn-lg btn-primary fw-bold"
          :to="{ name: 'Playlists' }"
          >Log In to Spotify</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  created() {},
};
</script>

<style scoped></style>
