<template>
  <div id="app">
    <div class="title">
      <img class="logo" src="../assets/logo_1.png" alt="logo de la empresa">
      <h1>Elese te da la bienvenida a la feria Excon 2018</h1>
      <h2>Completa el formulario y obtén tu descuento</h2>
    </div>
    <div class="botones">
      <button v-on:click="estadoInputs = false">Persona Natural</button>
      <button v-on:click="estadoInputs = true">Empresa</button>
    </div>
    <Forms :estado="estadoInputs" :mensaje="msj"/>
    <div>
      <button @click="getDiscount">Obtener Descuento</button>
    </div>
  </div>
</template>

<script>
import Forms from '../components/forms.vue'
import { servicePost } from '../services/services.js'
export default {
  name: 'viewForm',
  components: {
    Forms
  },
  data () {
    return {
      estadoInputs: false,
      msj: {}
    }
  },
  methods: {
    getDiscount () {
      servicePost(this.msj,this.estadoInputs)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
        this.msj={}
    }
  }
}
</script>

<style>
.logo {
  width: 20%;
  margin-right: 20px;
}
.title {
  width: 100%;
  color: #ffffff;
}
</style>
