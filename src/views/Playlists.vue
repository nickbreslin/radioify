<template>
  <div>
    <LoadingCard label="playlist" v-show="getPlaylists.length == 0" />
    <PlaylistList v-show="getPlaylists.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LoadingCard from "@/components/LoadingCard";
import PlaylistList from "@/components/PlaylistList";

export default {
  name: "Playlists",
  components: {
    LoadingCard,
    PlaylistList,
  },
  computed: {
    ...mapGetters(["getPlaylists"]),
  },
  methods: {},
  created() {},
};
</script>
