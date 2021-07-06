<template>
  <!--<pre>{{ payload }}</pre>-->
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
              class="img-fluid rounded-start me-3 playlist-thumb"
            />
          </div>
          <div class="">
            <h5 class="card-title">{{ payload.name }}</h5>
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
        >
          <i class="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </div>
  </div>

  <!--
  <div>
    <div class="row">
      <div class="col-md-3">
        <img
          :src="payload.images[1]?.url"
          class="img-fluid rounded-start me-3 playlist-thumb"
        />
      </div>
      <div class="col-md-7">
        <h5 class="card-title">{{ payload.name }}</h5>
        <p class="card-text badge bg-info">{{ payload.tracks.total }} tracks</p>
      </div>
      <div class="col-md-2 text-end">
        <button
          class="btn btn-link btn-lg btn-huge"
          @click="fetchQueries(payload.tracks.href)"
        >
          <i class="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </div>
  </div>
  -->
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
  max-height: 100px;
}

.btn-huge {
  font-size: 3.5em;
  color: #666;
}
</style>
