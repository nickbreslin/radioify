<template><div>...</div></template>

<script>
export default {
  name: "Main",
  components: {},
  created() {
    console.log("here");
    fetch("https://accounts.spotify.com/authorize");
  },
};
</script>
