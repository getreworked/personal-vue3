<template>
  <div class="job">
    <div class="years">
      <span v-for="year in years" :key="year">{{ year }}</span>
    </div>
    <h3>{{ title }}</h3>
    <h4>{{ company }}</h4>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.job {
  position: relative;
  margin: 0 20px;
  padding: 0 0 30px 20px;
  border-left: 2px solid var(--color-bg-inverse);

  &:last-child {
    margin-bottom: 60px;

    @mixin min-sm {
      margin-bottom: 0px;
    }
  }

  @mixin min-sm {
    margin-left: 12.5rem;
    padding-bottom: 60px;
  }

  h3 {
    margin-bottom: 0;
    font-size: 3.6rem;
  }

  h4 {
    margin-bottom: 20px;
    font-size: 2.6rem;
    color: var(--color-text-30);
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0 0 20px 20px;

      font-size: var(--p);
      list-style-type: disc;
    }
  }

  .years {
    margin-bottom: 20px;
    border-top: 2px solid var(--color-bg-inverse);
    border-bottom: 2px solid var(--color-bg-inverse);

    @mixin min-sm {
      position: absolute;
      left: -10.5rem;
      border: 0;
    }

    span {
      display: inline-block;
      height: 24px;
      margin: 5px 0;
      font-size: var(--h3);

      @mixin min-sm {
        display: block;
        height: auto;
        margin: 0;
        font-size: 4.2rem;
      }

      + span {
        margin-left: 5px;

        @mixin min-sm {
          margin-left: 0;
        }
      }

      &:nth-child(1) {
        color: var(--color-text-50);
      }

      &:nth-child(2) {
        color: var(--color-text-40);
      }

      &:nth-child(3) {
        color: var(--color-text-30);
      }

      &:nth-child(4) {
        color: var(--color-text-20);
      }
    }
  }
}
</style>

<script>
export default {
  name: "Job",

  props: {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    years: {
      type: Array,
      required: true,
    },

    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
