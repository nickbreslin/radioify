<template>
  <div v-for="playlist in getPlaylists" :key="playlist.id">
    <pre>{{ playlist }}</pre>
    <Playlist :payload="playlist" />
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ThePlaylists",
  components: {},
  data: function () {},
  computed: {
    ...mapGetters(["getToken", "getUserId", "getPlaylists"]),
  },
  methods: {
    ...mapActions(["setPlaylists"]),
    fetchPlaylists() {
      const url = `https://api.spotify.com/v1/users/${this.getUserId}/playlists`;

      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        this.setPlaylists(response.data.items);
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.fetchPlaylists();
    }, 500);
  },
};
</script>

<style scoped></style>
