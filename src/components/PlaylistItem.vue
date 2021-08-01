<template>
  <div>
    <div
      class="card card-body btn btn-light text-start mb-3"
      @click="fetchQueries(payload.tracks.href)"
    >
      <div class="d-flex flex-row justify-content-between">
        <div class="">
          <div class="d-flex flex-row">
            <div class="">
              <img
                :src="payload.images[1]?.url"
                :alt="`Cover for ${payload.name}`"
                class="
                  img-fluid
                  rounded-start
                  me-3
                  playlist-thumb
                  d-none d-md-block
                "
              />
            </div>
            <div class="">
              <div class="h5 card-title">{{ payload.name }}</div>
              <p class="card-text badge bg-info">
                {{ payload.tracks.total }} tracks
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <button
            class="btn btn-link btn-lg btn-huge"
            @click="fetchQueries(payload.tracks.href)"
            title="Select playlist"
          >
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PlaylistItem",
  components: {},
  data: function () {
    return {};
  },
  props: {
    payload: Object,
  },
  computed: {},
  methods: {
    ...mapActions(["setActivePlaylist"]),
    fetchQueries(link) {
      this.setActivePlaylist(link);
      this.$router.push({ name: "Tracks" });
    },
  },
};
</script>

<style scoped>
.playlist-thumb {
  max-height: 100px;
}

.btn-huge {
  font-size: 3.5em;
  color: #666;
}
</style>
