<template>
  <div>
    <div v-for="playlist in getPlaylists" :key="playlist.id">
      <TrackItem :payload="playlist" />
      <!-- <pre>{{ playlist }}</pre> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TrackItem from "@/components/TrackItem";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheTracks",
  components: { TrackItem },
  computed: {
    ...mapGetters(["getToken", "getUserId", "getPlaylists"]),
  },
  methods: {
    ...mapActions(["setUserId", "setPlaylists"]),

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
    getUserInfo(cb) {
      const url = `https://api.spotify.com/v1/me`;
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log("My Info", response);
        this.setUserId(response.data.id);
        if (cb) {
          cb();
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.getUserInfo(() => {
        this.fetchPlaylists();
      });
    }, 500);
  },
};
</script>

<style scoped></style>
