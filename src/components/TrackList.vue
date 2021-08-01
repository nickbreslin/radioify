<template>
  <div>
    <div v-for="track in getTracks" :key="track.id">
      <TrackItem :payload="track.track" />
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
    ...mapGetters(["getToken", "getUserId", "getTracks", "getActivePlaylist"]),
  },
  methods: {
    ...mapActions(["setUserId", "setTracks"]),
    fetchTracks() {
      console.log("Tracks...");
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(this.getActivePlaylist, options).then((response) => {
        console.log(response.data);
        this.setTracks(response.data.items);
      });
    },
    waitForPlaylistId() {
      setTimeout(() => {
        if (this.getActivePlaylist) {
          this.fetchTracks();
        } else {
          this.waitForPlaylistId();
        }
      }, 500);
    },
  },
  mounted() {
    this.waitForPlaylistId();
  },
};
</script>

<style scoped></style>
