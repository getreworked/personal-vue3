<template>
  <aside>
    <h3 v-if="heading">{{ heading }}</h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </aside>
</template>

<style scoped>
@import "../assets/styles/_mq.css";

aside {
  margin: 0 20px;
}

h3 {
  margin-bottom: 20px;
}

ul {
  margin: 0 0 60px;
  padding: 0 0 0 15px;
  border-left: 2px solid var(--color-bg-inverse);

  li {
    margin-bottom: 10px;
    list-style-type: none;

    font-size: var(--p);

    @mixin min-sm {
      font-size: var(--small);
    }
  }
}
</style>

<script>
export default {
  name: "Skillset",

  props: {
    heading: {
      type: String,
      default: "",
    },

    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
