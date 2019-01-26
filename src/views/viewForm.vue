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
        <form @submit.stop.prevent="getDiscount">
          <Forms :estado="estadoInputs" :mensaje="msj"/>
          <div class="uk-text-center uk-margin-top">
            <button type="submit" class="buttonText" >Obtener Descuento</button>
          </div>
        </form>
       
      </div>
    </div>
  </div>
</template>

<script>
import Forms from "../components/forms.vue";
import { servicePost } from "../services/services.js";
export default {
  name: "viewForm",
  components: {
    Forms
  },
  data() {
    return {
      estadoInputs: false,
      msj: {}
    };
  },
  methods: {
    getDiscount() {
      if (this.msj.email !== undefined || this.msj.comentario !== undefined) {
        servicePost(this.msj, this.estadoInputs)
          .then(res => {
            console.log(res);
          })
          .catch(e => {
            console.log(e);
          });
        this.msj = {};
      } else {
        console.log("campos vacios");
      }
    }
  }
};
</script>

<style>
.logo {
  width: 20%;
  margin-right: 20px;
}
.subTitle {
  color: #fff;
  font-size: 20.8px;
  font-size: 1.3rem;
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
.title {
  width: 100%;
}
.textTitle {
  font-size: 1.75rem !important;
  margin: 0;
  color: #fff;
}
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
.container {
  width: 90%;
  margin: auto;
}
.buttonSelected {
  background-color: #fff;
  color: #15989a;
}
</style>

