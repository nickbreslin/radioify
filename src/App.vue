<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-7">
        <TheHeader class="mb-5" />
        <router-view />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
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

<style scoped></style>
