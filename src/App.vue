<script setup lang="ts">
import ThemeToggle from "./components/ThemeToggle.vue";
import Logo from "./components/Logo.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <main id="app" class="container">
    <theme-toggle />

    <header>
      <logo />
      <navigation />
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<style>
@import "./assets/styles/base.css";

.container {
  min-width: 320px;
  max-width: 960px;
  margin: 0 auto;
  padding: 12vw 0;

  @mixin min-xs {
    padding: 60px 0 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-short) linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
