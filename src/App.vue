<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <TheHeader class="mb-5" />
        <main><router-view /></main>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";

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
