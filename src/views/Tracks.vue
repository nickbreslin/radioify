<template>
  <div>
    <router-link
      class="btn btn-lg btn-outline-dark mb-3"
      :to="{ name: 'Playlists' }"
      ><i class="bi bi-arrow-left-circle me-3"></i>Back to
      Playlists</router-link
    >
    <LoadingCard label="tracks" v-show="getTracks.length == 0" />
    <TrackList v-show="getTracks.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LoadingCard from "@/components/LoadingCard";
import TrackList from "@/components/TrackList";

export default {
  name: "Tracks",
  components: {
    LoadingCard,
    TrackList,
  },
  computed: {
    ...mapGetters(["getTracks"]),
  },
  methods: {},
  created() {},
};
</script>
