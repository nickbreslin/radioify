<template>
  <Footer>
    <div class="footer mb-5 pt-5">
      <div class="row">
        <div class="col-9">
          <p class="m-0">
            Radioify made by
            <a href="https://www.nickbreslin.com">Nick Breslin</a>.
          </p>
          <p class="m-0">
            Proudly built with
            <a href="https://https://vuejs.org/">Vue</a> and
            <a href="https://getbootstrap.com/">Bootstrap</a>.
          </p>
        </div>
      </div>
    </div>
  </Footer>
</template>

<script>
export default {
  name: "TheFooter",
  data: function () {
    return {};
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,
.btn-link {
  text-decoration: none;
}

a:hover,
.btn-link:hover {
  text-decoration: underline;
}
</style>
