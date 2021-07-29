<template>
  <div>
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
