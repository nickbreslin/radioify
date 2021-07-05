<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <TheHeader />
        <router-view />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
