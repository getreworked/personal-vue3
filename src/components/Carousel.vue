<template>
  <hover-intent
    :ms="{ in: 1000, out: 500 }"
    color="var(--color-bg)"
    @in="handleIn"
    @out="handleOut"
  >
    <div
      class="carousel"
      :class="{ 'is-active': isActive }"
      @keyup.37="previous"
      @keyup.39="next"
    >
      <div class="carousel__controls">
        <button
          title="previous"
          class="carousel__controls-previous button"
          @click="previous"
        >
          <icon-chevron-left class="carousel__controls-icon" />
        </button>
        <button
          title="next"
          class="carousel__controls-next button"
          @click="next"
          ref="next"
        >
          <icon-chevron-right class="carousel__controls-icon" />
        </button>
      </div>
      <div class="carousel__body">
        <transition name="fade">
          <Slide v-bind="currentSlide" :key="currentSlide.src" />
        </transition>
      </div>
    </div>
  </hover-intent>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.carousel {
  position: relative;
  overflow: hidden;
  height: 50vw;
  margin-bottom: 10%;

  background-color: var(--black);
  transition: height var(--transition-medium);

  @mixin min-xs {
    max-width: 700px;
    height: 306px;
    margin: 0 auto 60px;

    transition: max-width var(--transition-medium),
      height var(--transition-medium);
  }

  &.is-active {
    max-width: 960px;
    height: 260px;

    @mixin min-sm {
      height: 420px;
    }

    .carousel__controls {
      pointer-events: auto;

      &-previous,
      &-next {
        transform: translateX(0px);
      }
    }
  }

  &:not(.is-active) {
    cursor: none;
  }
}

.carousel__controls {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;

  width: 100%;
  height: 100%;
  justify-content: space-between;

  pointer-events: none;

  &-previous,
  &-next {
    transition: transform var(--transition-short);
  }

  &-previous {
    transform: translateX(-100px);

    @mixin min-xs {
      padding-left: 20px;
    }
  }

  &-next {
    transform: translateX(100px);

    @mixin min-xs {
      padding-right: 20px;
    }
  }

  &-icon {
    transform: scale(0.5);

    @mixin min-xs {
      transform: scale(1);
    }
  }
}

.carousel__body {
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  height: 100%;

  .slide {
    position: absolute;
    z-index: 1;
    width: 100%;
    object-fit: contain;

    @mixin min-xs {
      object-fit: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-long) ease;
}

.fade-leave-active {
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import { markRaw, h } from "vue";
import Slide from "./Slide.vue";
import HoverIntent from "./HoverIntent.vue";
import IconChevronLeft from "./IconChevronLeft.vue";
import IconChevronRight from "./IconChevronRight.vue";

import { clone } from "../utilities";

function prefetch(asset) {
  const img = new Image();

  img.src = asset.src;
  img.sizes = asset.sizes;
  img.srcset = asset.srcset;
}

export default {
  name: "Carousel",

  components: {
    Slide,
    HoverIntent,
    IconChevronLeft,
    IconChevronRight,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data: (vm) => ({
    isActive: false,
    slides: clone(vm.items),
  }),

  computed: {
    currentSlide() {
      return this.slides[0];
    },
  },

  watch: {
    currentSlide: function () {
      const nextSlide = this.slides[1];

      if (nextSlide) prefetch(nextSlide);
    },
  },

  methods: {
    previous() {
      const last = this.slides.pop();
      this.slides.unshift(last);
    },

    next() {
      const first = this.slides.shift();
      this.slides.push(first);
    },

    handleIn() {
      this.isActive = true;

      // If we focus the button too early, the carousel transition becomes jumpy
      // adding a slight delay to focus fixes this without any UX repercussions
      setTimeout(() => {
        this.$refs.next.focus();
      }, 500);
    },

    handleOut() {
      this.isActive = false;
    },
  },

  created() {
    this.slides = this.slides.map((src) => {
      const sizes = `(min-width: 540px) 960px, 100vw`;
      const srcset = `
          ${src}?nf_resize=fit&w=640&q=100 640w,
          ${src}?nf_resize=fit&w=960&q=100 960w,
          ${src}?nf_resize=fit&w=1242&q=100 1242w,
          ${src}?nf_resize=fit&w=1920&q=100 1920w
        `;

      return { src, srcset, sizes };
    });
  },
};
</script>
