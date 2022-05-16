<template>
  <img
    :src="`${src}?nf_resize=fit&w=960&q=100`"
    :srcset="srcset"
    :sizes="sizes"
    alt=""
  />
</template>

<style scoped></style>

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
