<template>
  <div class="uk-section container uk-height-1-1">
    <div class="uk-flex uk-height-1-1 uk-flex-center">
      <div class="uk-width-1-1 uk-flex-column">
        <div class="title">
          <img class="logo" src="../assets/logo_1.png" alt="logo de la empresa">
          <h1
            class="uk-text-uppercase uk-text-bold textTitle uk-text-center"
          >Elese te da la bienvenida a la feria Excon 2018</h1>
        </div>
        <div class="uk-text-center">
          <h2 class="subTitle">Completa el formulario y obtén tu descuento</h2>
        </div>
        <div class="uk-grid uk-child-width-1-2 uk-margin-bottom">
          <div class="uk-text-right">
            <button
              v-on:click="estadoInputs = false"
              class="boton uk-text-bold"
              :class="{'buttonSelected': !estadoInputs}"
            >Persona Natural</button>
          </div>
          <div class="uk-text-left">
            <button
              v-on:click="estadoInputs = true"
              class="boton uk-text-bold"
              :class="{'buttonSelected': estadoInputs}"
            >Empresa</button>
          </div>
        </div>
        <form @submit.stop.prevent="getDiscount" >
          <Forms :estado="estadoInputs" :mensaje="msj"/>
          <div class="uk-text-center uk-margin-top" >
            <button type="submit"  class="buttonText uk-text-bold" >Obtener Descuento</button>
          </div>
        </form>
        <button uk-toggle="target: #modal-center" class="display" id='openModal'></button>
      </div>
    </div>
    <Modal :mensaje="mensaje">
    </Modal>
  </div>
</template>

<script>
import Forms from "../components/forms.vue";
import { servicePost } from "../services/services.js";
import Modal from '@/components/modal.vue'
export default {
  name: "viewForm",
  components: {
    Forms,
    Modal
  },
  data() {
    return {
      estadoInputs: false,
      msj: {},
      mensaje: "Eres acreedor de un 10% de descuento en nuestros productos. Recuerda que es válido hasta el 31 de diciembre de 2019"
    };
  },
  methods: {
    getDiscount() {
      let id = document.getElementById('openModal');
      console.log(this.msj)
        servicePost(this.msj, this.estadoInputs)
          .then(res => {
            id.click();
            console.log(res);
          })
          .catch(e => {
            console.log(e);
          });
        this.msj = {};
        this.loader();
    },
    loader(){
  this.msj.departamento="departamento"
  this.msj.provincia ="provincia"
  this.msj.distrito = "distrito"
}
},
 mounted(){
  this.loader()
  },
}
</script>

<style>
.logo {
  width: 20%;
  margin-right: 20px;
}
.display{
  display: none;
}
.subTitle {
  color: #fff;
  font-size: 20.8px;
  font-size: 1.3rem;
}
.title {
  width: 100%;
}
.textTitle {
  font-size: 1.75rem !important;
  margin: 0;
  color: #fff;
}
@media only screen and (max-width: 600px){
.boton{
  font-size: 0.8rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  padding: 5px 15px;
  font-size: 1rem;
  cursor: pointer;
  width: 135px;
}
.buttonText {
  border: 1px solid #067170;
  background-color: #067170;
  color: #fff;
  font-size: 16px;
  font-size: 1rem;
  padding: 13px 23px;
  text-transform: uppercase;
  cursor: pointer;
}

}
@media only screen and (min-width: 600px){
  .boton {
  font-size: 0.8rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 1rem;
  width: 175px;
  cursor: pointer;
}
.buttonText {
  margin-left: 30px;
  border: 1px solid #067170;
  background-color: #067170;
  color: #fff;
  font-size: 16px;
  font-size: 1rem;
  padding: 15px 25px;
  text-transform: uppercase;
  cursor: pointer;
}
}

.container {
  width: 90%;
  margin: auto;
}
.buttonSelected {
  background-color: #fff;
  color: #15989a;
}
</style>

