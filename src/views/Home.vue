<template>
  <div class="home">
    <h1>Over mij</h1>
    <p>
      Mijn naam is Remco Halman, ik ben 27 jaar oud en ik ben mede-eigenaar van
      Escaperoom Drachten. Inmiddels hebben wij drie thema kamers gebouwd.
    </p>
    <p>
      Momenteel ben ik mij steeds meer met open source bezig gaan houden. Op
      mijn Github is daarom ook van alles te vinden via:
      <a
        href="https://github.com/RemcoHalman"
        target="_blank"
        rel="noopener noreferrer"
      >
        Remco Halman</a
      >
    </p>
    <p>
      In 2013 ben ik afgestudeerd van het Friesland College als mediavormgever
      met als specialisatie interactief.
    </p>
    <div>
      <tech-stack></tech-stack>
    </div>
  </div>
</template>

<script>
import TechStack from "@/components/TechStack.vue";

export default {
  name: "Home",
  title: "Remco Halman | Home",
  components: { TechStack },
};
</script>

<style lang="scss" scoped></style>
