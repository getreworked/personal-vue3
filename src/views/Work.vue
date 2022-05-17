<template>
  <section>
    <showcase v-for="item in work" :key="item.title" v-bind="item" />
  </section>
</template>

<style scoped></style>

<script>
import { work } from "../db/work";

// Components
import Showcase from "../components/Showcase.vue";

export default {
  components: {
    Showcase,
  },

  data: () => ({
    work,
  }),
};
</script>
