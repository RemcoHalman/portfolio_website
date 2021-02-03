<template>
  <div class="portfolio">
    <h1>Portfolio Page</h1>
    <p>Dit is een greep van alle projecten waar ik aan gewerkt</p>
    <the-portfolio></the-portfolio>
  </div>
</template>

<script>
import ThePortfolio from "@/components/ThePortfolio.vue";

export default {
  name: "Portfolio",
  title: "Remco Halman | Portfolio",
  components: { ThePortfolio },
};
</script>

<style lang="scss" scoped></style>
