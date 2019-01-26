<template>
  <div class="uk-height-1-1">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
html{
  height: 100%;
  width: 100%;
}
body {
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100%;
  background-size: 100% 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px 0px;
}
</style>
