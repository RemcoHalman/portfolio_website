<template>
  <div class="cv-flex">
    <div class="left-bar">
      <h4>Contact gegevens</h4>
      <p>
        Remco Halman <br />
        Swannedrift 21 <br />
        9022AR Mantgum
      </p>

      <p>
        +31 6 44 11 56 66<br />
        remco.halman@gmail.com
      </p>
      <p>
        <a
          href="https://www.remcohalman.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.remcohalman.nl
        </a>
        <br />
        <a
          href="https://www.github.com/remcohalman"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.github.com/remcohalman
        </a>
      </p>

      <h4>Skillset</h4>
    </div>
    <div class="right-bar">
      <div class="workExperience">
        <h3>Werkervaring</h3>
        <span v-for="(job, id) in workExperience" :key="id">
          <p>
            {{ job.company }} | <i>{{ job.function }}</i>
            <br />
            {{ job.start }} - {{ job.stopped }} | <i>{{ job.location }}</i>
          </p>
        </span>
      </div>
      <div class="internShips">
        <h3>Stages</h3>
        <span v-for="(job, id) in internShips" :key="id">
          <p>
            {{ job.company }} | <i>{{ job.function }}</i>
            <br />
            {{ job.start }} - {{ job.stopped }} | <i>{{ job.location }}</i>
          </p>
        </span>
      </div>
      <div class="education">
        <h3>opleiding</h3>
        <span v-for="(school, id) in education" :key="id">
          <p>
            {{ school.school }} <br />
            <i>
              {{ school.opleiding }}
            </i>
            <br />
            {{ school.startjaar }} - {{ school.examenjaar }} |
            {{ school.locatie }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV",
  title: "Remco Halman | CV",
  components: {},
  data() {
    return {
      workExperience: this.$store.state.workExperience,
      internShips: this.$store.state.internShips,
      education: this.$store.state.education,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.cv-flex {
  display: flex;
  flex-wrap: nowrap;
  & > div {
    width: 100px;
  }
  .left-bar {
    flex-grow: 1;
    max-width: 400px;
    text-align: center;
  }
  .right-bar {
    background-color: #f1f1f1;
    text-align: left;
    padding: 0 10px;
    flex-grow: 2;
    & div {
      border-top: 1px solid;
      & span > p {
        border-left: 2px solid;
        padding-left: 10px;
      }
      &:first-child {
        border: 0;
      }
    }
  }
}
</style>
