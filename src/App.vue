<template>
  <div class="container mt-3">
    <div class="row">
      <router-view />
    </div>
  </div>
  <TheFooter />
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  components: {},
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
