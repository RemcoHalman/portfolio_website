<template>
  <div id="footer" class="grid-container">
    <div class="adres">
      <h1 class="">Adres</h1>
      <p>
        Swannedrift 21<br />
        9022 AR Mantgum
      </p>
    </div>
    <div class="around-the-web">
      <h1 class="h1">Around the web</h1>
    </div>
    <div class="name flex justify-center">
      <h5>Remco Halman - {{ now }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: this.getDate(),
    };
  },
  methods: {
    getDate() {
      var date = new Date();
      var year = date.getFullYear();
      return year;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "adres around-the-web"
    "name name";
}
</style>
