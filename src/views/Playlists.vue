<template>
  <div>
    <LoadingCard label="playlist" v-show="getPlaylists.length == 0" />
    <ThePlaylists v-show="getPlaylists.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LoadingCard from "@/components/LoadingCard";
import ThePlaylists from "@/components/ThePlaylists";

export default {
  name: "Playlists",
  components: {
    LoadingCard,
    ThePlaylists,
  },
  computed: {
    ...mapGetters(["getPlaylists"]),
  },
  methods: {},
  created() {},
};
</script>
