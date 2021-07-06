<template>
  <!-- <pre>{{ payload }}</pre>-->
  <hr />
  <div class="card card-body">
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
            <h5 class="card-title">{{ payload.name }}</h5>

            <span
              v-for="artist in payload.artists"
              :key="artist.id"
              class="pe-3"
              >{{ artist.name }}
            </span>
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
  <!--
    <div class="card card-body">
       <pre>{{ track.track }}</pre>
      <p>{{ track.track.name }}</p>
      <p>{{ track.track.explicit }}</p>
      <span v-for="artist in track.track.artists" :key="artist.id" class="pe-3"
        >{{ artist.name }}
      </span>
      <hr />

    </div>
    <br /><br /><br />
    <div v-for="playlist in playlists" :key="playlist.id">
      <div class="row g-0 mb-3 border-bottom">
        <div class="col-md-2">
          <img
            :src="playlist.images[1]?.url"
            class="img-fluid rounded-start playlist-thumb me-3"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ playlist.name }}</h5>
            <p class="card-text">
              <small class="text-muted"
                >{{ playlist.tracks.total }} tracks</small
              >
            </p>
            <button
              class="btn btn-primary"
              @click="fetchQueries(playlist.tracks.href)"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      
    </div>-->
  <!--
    <div class="card card-body mb-3">
      <p>Name : {{ playlist.name }}</p>
      <img style="height: 60px; width: 60px" :src="playlist.images[2]?.url" />
      <p>ID : {{ playlist.id }}</p>
      <p>Images : {{ playlist.images[2]?.url }}</p>
      <p>Public : {{ playlist.public }}</p>
      <p>URI : {{ playlist.uri }}</p>
    </div>
    -->
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
  max-height: 120px;
}
</style>
