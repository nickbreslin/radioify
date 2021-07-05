<template>
  <div class="container">
    <!--
    <div class="row">Callback</div>
    <p>{{ getToken }}</p>
    -->

    <div v-for="track in tracks" :key="track.id">
      <!-- <pre>{{ track.track }}</pre>-->
      <p>{{ track.track.name }}</p>
      <p>{{ track.track.explicit }}</p>
      <span v-for="artist in track.track.artists" :key="artist.id" class="pe-3"
        >{{ artist.name }}
      </span>
      <hr />
      <!-- id -->
      <!-- href -->
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
    </div>

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
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      playlists: [],
      tracks: [],
    };
  },
  computed: {
    ...mapGetters(["getToken", "getUserId"]),
  },
  methods: {
    fetchPlaylists() {
      console.log("Spotify...");

      const url = `https://api.spotify.com/v1/users/${this.getUserId}/playlists`;
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log(response.data);
        this.playlists = response.data.items;
      });
    },
    fetchQueries(link) {
      //api.spotify.com/v1/playlists/2QreKtPDBanw7E01PaBi93/tracks

      console.log("Tracks...");

      const url = link;
      let options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken}`,
        },
      };

      this.axios.get(url, options).then((response) => {
        console.log(response.data);
        this.tracks = response.data.items;

        this.tracks.forEach((track) => {
          if (track.track.explicit) {
            console.log("Explicit", track.track);
            this.fetchCleanTrack(track.track);
          }
        });
      });
    },
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
  },
  mounted() {
    setTimeout(() => {
      this.fetchPlaylists();
    }, 500);
  },
};
</script>

<style scoped>
.playlist-thumb {
  max-height: 120px;
}
</style>
