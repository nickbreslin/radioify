<template>
  <div class="card card-body">
    <div class="text-center h4 mb-3">Loading {{ label }}...</div>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 100%"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function () {
    return {};
  },
  props: {
    label: {
      type: String,
    },
  },
  computed: {},
  methods: {},
};
</script>
