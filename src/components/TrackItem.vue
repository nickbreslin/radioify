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
        <div v-show="!payload.explicit">
          <p>No search needed.</p>
        </div>
        <div v-if="payload.explicit">
          <div v-show="!searching && found">
            <div class="h6 card-title m-0">{{ foundTitle.name }}</div>
            <small>
              <span
                v-for="(artist, index) in foundTitle.artists"
                :key="artist.id"
                >{{ artist.name
                }}<span v-if="index != foundTitle.artists.length - 1">, </span>
              </span>
            </small>
          </div>
          <div v-show="!searching && !found">
            <p>Searching done. <span class="text-warning">Not found.</span></p>
          </div>
          <div class="" v-show="payload.explicit && searching">
            <div class="text-center fw-bold mb-3">Searching...</div>
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
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";

export default {
  name: "TrackItem",
  components: {},
  data: function () {
    return {
      searching: false,
      found: false,
      foundTitle: {},
    };
  },
  props: {
    payload: Object,
  },
  computed: {
    ...mapGetters(["getToken", "getUserId"]),
  },
  methods: {
    fetchCleanTrack() {
      console.log("Fetching clean track...");
      this.searching = true;

      const url = `https://api.spotify.com/v1/search?q=${this.payload.name}&type=track&limit=50`;
      console.log(url);
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log(response.data.tracks);

        this.searching = false;

        let clean = response.data.tracks.items.filter((_track) => {
          if (_track.explicit == true) {
            console.log("Not explicit");
            return false;
          }

          if (_track.name.toLowerCase() !== this.payload.name.toLowerCase()) {
            console.log("Not match");
            return false;
          }

          // Currently, checks artist if a single artist on track
          if (this.payload.artists.length == 1) {
            let artists = _track.artists.filter((_artist) => {
              return (
                _artist.name.toLowerCase() ===
                this.payload.artists[0].name.toLowerCase()
              );
            });

            if (artists.length == 0) {
              console.log("Incorrect artist");
              return false;
            }
          }

          console.log("MATCH");
          return true;
        });

        this.found = clean.length;

        this.foundTitle = this.found ? clean[0] : {};
      });
    },
    fetchCleanTrackArtist() {
      console.log("Fetching  artist...");
      this.searching = true;

      const artist = this.payload.artists[0].name;
      const url = `https://api.spotify.com/v1/search?q=${this.payload.name}%20artist:${artist}&type=track&limit=50`;
      console.log(url);
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log(response.data.tracks);

        this.searching = false;

        let clean = response.data.tracks.items.filter((_track) => {
          if (_track.explicit == true) {
            console.log("Not explicit");
            return false;
          }

          if (_track.name != this.payload.name) {
            console.log("Not match");
            return false;
          }

          //if (_track.name != track.name) {
          //console.log(`${_track.name} - ${track.name}`);
          //console.log("Not match");
          //return false;
          //}

          //_track.artists.forEach((r) => {
          //  console.log(`${_track.name} - ${r.name}`);
          //});

          console.log("MATCH");
          return true;
        });

        console.log(clean);
        this.found = clean.length;

        this.foundTitle = this.found ? clean[0] : {};

        if (!this.found) {
          this.fetchCleanTrack();
        }
      });
    },
  },
  created() {
    if (this.payload.explicit) {
      this.fetchCleanTrackArtist();
    }
  },
};
</script>

<style scoped>
.playlist-thumb {
  max-height: 60px;
}
</style>
