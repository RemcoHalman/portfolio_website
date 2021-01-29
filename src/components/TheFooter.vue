<template>
  <div id="footer" class="grid-container">
    <div class="adres">
      <h1>Adres</h1>
      <p>
        Swannedrift 21<br />
        9022 AR Mantgum
      </p>
    </div>
    <div class="around-the-web">
      <h1>Around the web</h1>
    </div>
    <div class="name">
      <h5>Remco Halman</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  background-color: #2c3e50;
}

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

.adres {
  grid-area: adres;
}

.around-the-web {
  grid-area: around-the-web;
}

.name {
  grid-area: name;
  background-color: #1a252f;
  h5 {
    align-self: center;
  }
}
</style>
