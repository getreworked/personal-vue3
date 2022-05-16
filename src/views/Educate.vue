<template>
  <section class="grid">
    <card v-for="article in articles" :key="article.title" v-bind="article" />
  </section>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.grid {
  margin-bottom: 60px;

  @mixin min-xs {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<script>
// API
import { getArticles } from "../api";

// Components
import Card from "../components/Card.vue";

export default {
  name: "Educate",

  components: {
    Card,
  },

  data: () => ({
    articles: [],
  }),

  created() {
    getArticles().then(({ data }) => (this.articles = data.data));
  },
};
</script>
