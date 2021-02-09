<template>
  <h3>Tech Stack</h3>
  <div class="grid-container">
    <div class="languages">
      <h5>Languages</h5>
      <ul>
        <li v-for="job in skillset['languages']" :key="job">
          {{ job }}
        </li>
      </ul>
    </div>
    <div class="frameworks">
      <h5>Frameworks</h5>
      <ul>
        <li v-for="job in skillset['frameworks']" :key="job">
          {{ job[0] }} <small>| {{ job[1] }} </small>
        </li>
      </ul>
    </div>
    <div class="programmas">
      <h5>Programma's</h5>
      <ul>
        <li v-for="job in skillset['programmas']" :key="job">
          {{ job }}
        </li>
      </ul>
    </div>
    <div class="extra">
      <h5>Extra</h5>
      <ul>
        <li v-for="job in skillset['extra']" :key="job">
          {{ job }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Techstack",
  components: {},
  data() {
    return {
      skillset: this.$store.state.skillset,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "languages frameworks programmas extra";

  .languages {
    grid-area: languages;
  }

  .frameworks {
    grid-area: frameworks;
  }

  .programmas {
    grid-area: programmas;
  }

  .extra {
    grid-area: extra;
  }
  ul {
    padding: 0;
  }
}
</style>
