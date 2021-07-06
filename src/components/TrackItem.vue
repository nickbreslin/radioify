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

import { mapGetters, mapActions } from "vuex";

export default {
  name: "TrackItem",
  components: {},
  data: function () {
    return {};
  },
  props: {
    payload: Object,
  },
  computed: {
    ...mapGetters(["getToken", "getUserId"]),
  },
  methods: {
   fetchCleanTrack(track) {
      console.log("Fetching clean track...");

      //const artist = track.artists[0].name;
      //const url = `https://api.spotify.com/v1/search?q=${track.name}%20artist:${artist}&type=track&limit=50`;
      const url = `https://api.spotify.com/v1/search?q=${track.name}&type=track&limit=50`;
      console.log(url);
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log(response.data.tracks);

        let clean = response.data.tracks.items.filter((_track) => {
          if (_track.explicit == true) {
            console.log("Not explicit");
            return false;
          }

          if (_track.name != track.name) {
            console.log("Not match");
            return false;
          }

          //if (_track.name != track.name) {
          //console.log(`${_track.name} - ${track.name}`);
          //console.log("Not match");
          //return false;
          //}

          //console.log(_track.artists);

          //_track.artists.forEach((r) => {
          //  console.log(`${_track.name} - ${r.name}`);
          //});

          //console.log(_track.artists);
          console.log("MATCH");
          return true;
        });

        console.log(clean);
        /*
        this.tracks = response.data.items;

        this.tracks.forEach((track) => {
          if (track.track.explicit) {
            console.log("Explicit", track.track);
            this.fetchCleanTrack(track.track);
          }
        });
        */
      });

  },
};
</script>

<style scoped>
.playlist-thumb {
  max-height: 60px;
}
</style>
