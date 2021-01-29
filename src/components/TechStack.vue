<template>
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
</template>

<script>
export default {};
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
