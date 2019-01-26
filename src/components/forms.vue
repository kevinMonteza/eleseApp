<template>
  <form>
    <div class="col1">
      <input type="text" name="nombreApellidos" placeholder="Nombre Completo" v-model="mensaje.nombreApellidos">
      <input type="text" name="dni" placeholder="DNI" v-model="mensaje.dni">
      <input type="text" name="celular" placeholder="Celular" v-model="mensaje.celular">
      <input type="email" name="correo" placeholder="Correo" v-model="mensaje.email">
      <div class="imputsEmpresa" v-if="estado">
        <input type="text" name="razonSocial" placeholder="Razon Social" v-model="mensaje.razonSocial">
        <input type="text" name="RUC" placeholder="RUC" v-model="mensaje.RUC">
      </div>
    </div>
    <div class="col2">
      <input type="text" name="direccion" placeholder="Dirección" v-model="mensaje.direccion">
      <input type="text" name="departamento" placeholder="Departamento" v-model="mensaje.departamento">
      <input type="text" name="provincia" placeholder="Provincia" v-model="mensaje.provincia">
      <input type="text" name="distrito" placeholder="Distrito" v-model="mensaje.distrito">
      <textarea name="comentarios" v-model="mensaje.comentario"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  name: 'forms',
  props: ['estado', 'mensaje']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
