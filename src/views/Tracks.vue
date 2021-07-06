<template>
  <div>
    <LoadingCard label="tracks" v-show="getTracks.length == 0" />
    <TheTracks v-show="getTracks.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LoadingCard from "@/components/LoadingCard";
import TheTracks from "@/components/TheTracks";

export default {
  name: "Tracks",
  components: {
    LoadingCard,
    TheTracks,
  },
  computed: {
    ...mapGetters(["getTracks"]),
  },
  methods: {},
  created() {},
};
</script>
