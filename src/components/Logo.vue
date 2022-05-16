<template>
  <div class="logo">
    <router-link to="/work">James Thomson</router-link>
  </div>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.logo {
  font-family: "Baskerville", "Garamond", "Times New Roman", "Serif";
  margin-bottom: 30px;
  text-align: center;

  a {
    font-size: var(--h1);
    color: var(--color-text-0);

    @mixin min-xs {
      font-size: 6rem;
    }
  }
}
</style>

<script>
export default {
  name: "Logo",
};
</script>
