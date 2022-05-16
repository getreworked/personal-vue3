<template>
  <article class="card hitarea" :class="type">
    <a :href="url" rel="noreferrer" target="_blank">
      <img
        :src="`${image}?nf_resize=fit&w=280&h=160 280w`"
        :srcset="`
          ${image}?nf_resize=fit&w=280&h=160 280w,
          ${image}?nf_resize=fit&w=344&h=160 344w,
          ${image}?nf_resize=fit&w=560&h=320 560w,
          ${image}?nf_resize=fit&w=688&h=320 688w,
        `"
        sizes="(min-width: 992px) 280px, 100vw"
        alt=""
      />

      <h1>{{ title }}</h1>
      <h2 v-if="subTitle">{{ subTitle }}</h2>
      <p class="small">{{ text }}</p>
      <p class="small">
        <a class="link" :href="url" rel="noreferrer" target="_blank"
          >View {{ type }}</a
        >
      </p>
    </a>
  </article>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.card {
  width: calc(100% - 40px);
  margin: 0 20px 40px;
  padding: 0 0 30px;
  border-bottom: 1px solid var(--gray-10);

  cursor: pointer;

  @mixin min-sm {
    width: calc(50% - 40px);
    margin: 10px;
    padding: 10px;
    border-bottom: 0;

    transition: background var(--transition-short);

    &:hover {
      background-color: var(--color-bg-hover);
    }
  }

  @mixin min-md {
    width: 300px;
  }

  img {
    width: calc(100% + 40px);
    height: 52vw;
    margin-left: -20px;
    margin-bottom: 30px;

    object-fit: cover;

    @mixin min-sm {
      width: 100%;
      height: 160px;
      margin-left: 0;
    }
  }

  h1 {
    margin-bottom: 20px;

    font-size: var(--h2);
  }

  h2 {
    font-size: var(--h4);
    font-style: italic;
    color: var(--color-text-30);
  }

  &.profile {
    h1 {
      margin-bottom: 0;
    }
  }

  &.hitarea > a {
    color: inherit;

    > *:last-child {
      margin-bottom: 0;
    }
  }

  .link {
    text-transform: capitalize;

    @mixin min-md {
      display: none;
    }
  }
}
</style>

<script>
export default {
  name: "Card",

  props: {
    type: {
      type: String,
      required: true,
    },

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

    image: {
      type: String,
      required: true,
    },
  },
};
</script>
