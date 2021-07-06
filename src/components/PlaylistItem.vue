<template>
  <pre>{{ payload }}</pre>
  <div class="card card-body">
    <!--
      <span class="badge bg-danger">{{ payload.explicit }}</span>
    -->

    <div class="row">
      <div class="col-md-3">
        <img
          :src="payload.images[1]?.url"
          class="img-fluid rounded-start me-3"
        />
      </div>
      <div class="col-md-6">
        <h5 class="card-title mb-0">{{ payload.name }}</h5>
        <p class="card-text">
          <small>{{ payload.tracks.total }} tracks</small>
        </p>
      </div>
      <div class="col-md-3">
        <button
          class="btn btn-primary"
          @click="fetchQueries(payload.tracks.href)"
        >
          Select Playlist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

//import { mapGetters, mapActions } from "vuex";

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
  methods: {},
};
</script>

<style scoped>
.playlist-thumb {
  max-height: 120px;
}
</style>
