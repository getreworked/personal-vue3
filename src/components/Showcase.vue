<template>
  <article class="showcase">
    <carousel :items="images" />

    <div class="showcase__body">
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
      <span v-html="text"></span>
      <p v-if="url">
        <a class="link" :href="url" rel="noreferrer" target="_blank"
          >View Website</a
        >
      </p>
    </div>
  </article>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.showcase__body {
  max-width: 700px;
  margin: 0 auto 20vw;
  padding: 0 20px;

  @mixin min-sm {
    margin: 0 auto 100px;
    padding: 0;
  }

  h1 {
    margin-bottom: 0;
  }

  h2 {
    font-size: var(--h4);
    font-style: italic;
    color: var(--color-text-30);
  }

  > *:last-child {
    margin-bottom: 0;
  }
}
</style>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "Showcase",

  components: {
    Carousel,
  },

  props: {
    title: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      default: "",
    },

    url: {
      type: String,
      default: "",
    },

    text: {
      type: String,
      required: true,
    },

    images: {
      type: Array,
      required: true,
    },
  },
};
</script>
