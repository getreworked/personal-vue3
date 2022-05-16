<template>
  <nav class="nav">
    <router-link to="/work">Work.</router-link>
    <router-link to="/educate">Educate.</router-link>
    <router-link to="/experience">Experience.</router-link>
  </nav>
</template>

<style scoped>
@import "../assets/styles/_mq.css";

.nav {
  margin-bottom: 10vw;
  text-align: center;

  @mixin min-xs {
    margin-bottom: 60px;
  }

  a {
    margin: 0 10px;

    font-size: 2.2rem;
    color: var(--color-nav-link);

    @mixin min-xs {
      font-size: 2.6rem;
      margin: 0 20px;
    }

    &.active {
      color: var(--color-nav-link-active);
    }

    &:hover {
      color: var(--color-nav-link-hover);
    }
  }
}
</style>

<script>
export default {
  name: "Navigation",
};
</script>
