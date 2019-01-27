<template>
  <div>
    <img src="../assets/logo_2.png" alt class="modalImage">
    <p class="modalText">Tu mensaje fue recibido</p>
    <p class="modalTextThanks uk-text-bold">¡Gracias por completar el formulario</p>
    <p class="modalText">{{msj}}</p>
  </div>
</template>
<script>
export default {
    name: 'modalBody',
    props:['msj']
};
</script>

<style>
</style>


