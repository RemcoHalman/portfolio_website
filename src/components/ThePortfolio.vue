<template>
  <div class="portfolio-items flex">
    <portfolio-item
      class="portfolio-item"
      v-for="item in portfolioItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :description="item.description"
      :image="item.image"
      :tags="item.tags"
      :link="item.link"
      :type="item.type"
      :link_short="item.link_short"
    >
    </portfolio-item>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue";

export default {
  components: { PortfolioItem },
  data() {
    return {
      portfolioItems: this.$store.state.portfolioItems,
    };
  },
};
</script>

<style lang="scss" scoped></style>
