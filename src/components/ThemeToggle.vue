<template>
  <button
    :title="`Switch theme to ${
      this.theme === 'is-light' ? 'dark' : 'light'
    } mode`"
    class="button toggle"
    :class="`toggle--${theme}`"
    @click="toggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <clipPath id="theme-clip-path">
          <rect x="6.04" y="2.92" width="20.79" height="17.04" fill="none" />
        </clipPath>
      </defs>
      <path
        class="line"
        d="M7.54,21A0.51,0.51,0,0,1,7,20.5,0.5,0.5,0,0,1,7.54,20h6.07l2.92,2.5L19.45,20h6.08a0.51,0.51,0,0,1,.51.5,0.5,0.5,0,0,1-.51.5H20l-3.5,3L13,21H7.54Z"
      />
      <g clip-path="url(#theme-clip-path)">
        <path
          class="sun"
          d="M22,18c0-.17,0-0.33,0-0.5a5.5,5.5,0,0,0-11,0c0,0.17,0,.33,0,0.5h1a4.58,4.58,0,0,1,0-.5,4.5,4.5,0,0,1,9,0,4.58,4.58,0,0,1,0,.5h1ZM16.53,8a0.49,0.49,0,0,0-.5.49v2a0.5,0.5,0,0,0,.5.49A0.49,0.49,0,0,0,17,10.5v-2A0.5,0.5,0,0,0,16.53,8h0Zm6.74,2.79a0.49,0.49,0,0,0-.7,0l-1.42,1.42a0.5,0.5,0,0,0,0,.7,0.49,0.49,0,0,0,.7,0l1.42-1.42a0.5,0.5,0,0,0,0-.7h0Zm2.79,6.74a0.49,0.49,0,0,0-.5-0.5h-2a0.5,0.5,0,0,0-.5.5,0.49,0.49,0,0,0,.5.5h2a0.5,0.5,0,0,0,.5-0.5h0ZM7,17.53a0.49,0.49,0,0,0,.49.5h2a0.5,0.5,0,0,0,.49-0.5A0.49,0.49,0,0,0,9.5,17h-2a0.5,0.5,0,0,0-.49.5H7Zm2.79-6.74a0.49,0.49,0,0,0,0,.7l1.42,1.42a0.5,0.5,0,0,0,.7,0,0.49,0.49,0,0,0,0-.7L10.5,10.79a0.5,0.5,0,0,0-.7,0h0Z"
        />
        <path
          class="moon"
          d="M21.34,13.83h0a5.44,5.44,0,0,0,.16-1.09A4.5,4.5,0,0,1,15.75,7a5.5,5.5,0,1,0,5.58,6.83h0ZM11.5,12.49a4.5,4.5,0,0,1,3-4.25c0,0.08,0,.16,0,0.25A5.5,5.5,0,0,0,20,14h0.25A4.5,4.5,0,0,1,11.5,12.5h0Z"
        />
      </g>
    </svg>
  </button>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.toggle {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;

  @mixin min-xs {
    position: fixed;
  }

  @mixin min-md {
    right: 10px;
    top: 10px;
  }

  .sun,
  .moon {
    transition: transform 1s cubic-bezier(0.83, 0.23, 0, 1.22);
  }
}

.toggle--is-dark {
  .sun {
    transform: translateY(0);
  }

  .moon {
    transform: translateY(20px);
  }

  .line,
  .sun,
  .moon {
    fill: var(--white);
  }
}

.toggle--is-light {
  .sun {
    transform: translateY(20px);
  }

  .moon {
    transform: translateY(0);
  }

  .line,
  .sun,
  .moon {
    fill: var(--black);
  }
}
</style>

<script>
import { addClassToRoot, removeClassFromRoot } from "../utilities";

export default {
  name: "ThemeToggle",

  data: () => ({
    theme: "is-light",
  }),

  methods: {
    toggle() {
      this.theme === "is-light" ? this.setAsDark() : this.setAsLight();
    },

    setAsDark() {
      removeClassFromRoot(this.theme);
      this.theme = "is-dark";
      window.localStorage.setItem("theme", this.theme);
      addClassToRoot(this.theme);
    },

    setAsLight() {
      removeClassFromRoot(this.theme);
      this.theme = "is-light";
      window.localStorage.setItem("theme", this.theme);
      addClassToRoot(this.theme);
    },
  },

  created() {
    let theme = window.localStorage.getItem("theme");
    let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark || theme === "is-dark") {
      this.setAsDark();
    } else {
      this.setAsLight();
    }
  },
};
</script>
