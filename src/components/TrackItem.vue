<template>
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-row justify-content-between">
          <div class="">
            <div class="d-flex flex-row">
              <div class="">
                <img
                  :src="payload.album.images[1]?.url"
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
                <div class="h6 card-title m-0">{{ payload.name }}</div>
                <small>
                  <span
                    v-for="(artist, index) in payload.artists"
                    :key="artist.id"
                    >{{ artist.name
                    }}<span v-if="index != payload.artists.length - 1">, </span>
                  </span>
                </small>
                <br />
                <span
                  class="badge bg-danger text-uppercase"
                  v-show="payload.explicit"
                  >explicit</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="" v-show="payload.explicit">
          <div class="text-center mb-3">
            Searching for non-explicit version...
          </div>
          <div class="progress">
            <div
              class="
                progress-bar
                bg-warning
                progress-bar-striped progress-bar-animated
              "
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 100%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

//import { mapGetters, mapActions } from "vuex";

export default {
  name: "TrackItem",
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
  max-height: 60px;
}
</style>
