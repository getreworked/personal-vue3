<template>
  <img
    class="slide"
    :src="`${src}?nf_resize=fit&w=960&q=100`"
    :srcset="srcset"
    :sizes="sizes"
    alt=""
  />
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.slide {
  position: absolute;
  z-index: 1;
  width: 100%;
  object-fit: contain;

  @mixin min-xs {
    object-fit: none;
  }
}
</style>

<script>
export default {
  name: "Slide",
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
  },
};
</script>
