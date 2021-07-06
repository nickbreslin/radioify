<template>
  <div></div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";

export default {
  name: "Callback",
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
};
</script>

<style scoped></style>
