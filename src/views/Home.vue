<template>
  <div class="home">
    <h1>Over mij</h1>
    <p>
      Mijn naam is Remco Halman, ik ben 27 jaar oud en ik ben mede-eigenaar van
      Escaperoom Drachten. Inmiddels hebben wij drie thema kamers gebouwd.
    </p>
    <p>
      In 2013 ben ik afgestudeerd van het Friesland College als mediavormgever
      met als specialisatie interactief.
    </p>
    <div>
      <h3>Tech Stack</h3>
      <div class="grid-container">
        <div class="languages">
          <h5>Languages</h5>
          <ul>
            <li>HTML5</li>
            <li>SCSS/CSS</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>C++</li>
          </ul>
        </div>
        <div class="frameworks">
          <h5>Frameworks</h5>
          <ul>
            <li>Flask <small>| Python</small></li>
            <li>Django <small>| Python</small></li>
            <li>Vue.js <small>| Javascript</small></li>
          </ul>
        </div>
        <div class="programmas">
          <h5>Programma's</h5>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
        <div class="extra">
          <h5>Extra</h5>
          <ul>
            <li>Docker</li>
            <li>Git</li>
            <li>Linux</li>
            <li>Mac OS</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
}
</style>
