<template>
  <section class="grid">
    <div class="skillsets">
      <skillset v-for="set in skillsets" :key="set.heading" v-bind="set" />
    </div>
    <div class="timeline">
      <job v-for="job in jobs" :key="job.title" v-bind="job" />
    </div>
  </section>
</template>

<style scoped>
@import "../assets/styles/_mq.css";
.grid {
  display: flex;
  flex-direction: column;

  @mixin min-sm {
    flex-direction: row;
    justify-content: space-between;
  }

  .skillsets {
    order: 1;

    @mixin min-sm {
      order: 0;
    }
  }

  .timeline {
    order: 0;

    @mixin min-sm {
      order: 1;
      max-width: 570px;
    }
  }
}
</style>

<script>
// API
import { getSkillsets, getJobs } from "../api";

// Component
import Skillset from "../components/Skillset.vue";
import Job from "../components/Job.vue";

export default {
  name: "Experience",

  components: {
    Skillset,
    Job,
  },

  data: () => ({
    skillsets: [],
    jobs: [],
  }),

  created() {
    getSkillsets().then(({ data }) => (this.skillsets = data.data));
    getJobs().then(({ data }) => (this.jobs = data.data));
  },
};
</script>
