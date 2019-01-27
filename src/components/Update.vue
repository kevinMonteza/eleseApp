<template>
  <div class="section uk-container">
    <div class="uk-flex uk-flex-row uk-height-1-1 uk-flex-center card uk-section">
      <div class="uk-height-1-1">
          <!-- mensaje de alerta -->
          <div class="uk-alert-primary" v-if="showAlert" uk-alert>
             <a class="uk-alert-close" @click="showAlert = !showAlert" uk-close></a>
            <p>{{alerta}}</p>
          </div>

        <div class="uk-flex-column">
          <div class="uk-text-large uk-flex">
            <div class="logo">
              <img src="../assets/logo_2.png" alt="Logo ELese">
            </div>
            <h2
              class="uk-text-uppercase uk-padding-small uk-text-bold"
              style="color:#708787"
            >Actualizar formularios</h2>
          </div>
          <div>
            <!-- <Forms :mensaje="$route.params.form" :estado="$route.params.status"/> -->
            <!-- {{$route.params.form}} -->
            <form @submit.stop.prevent="update">
              <div class="uk-grid uk-form-stacked uk-child-width-1-2@s">
              <div class="">
                <div class="uk-margin">
                  <label class="uk-form-label" for="nombreApellidos">{{placeholderNombre}}</label>
                    <div class="uk-form-controls">
                        <input type="text" name="nombreApellidos" :placeholder="placeholderNombre" v-model="mensaje.nombreApellidos" class="uk-width-1-1 uk-input inputForm">
                    </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" v-if="!estado" for="nombreApellidos">DNI</label>
                  <div class="uk-form-controls">
                        <input type="text" name="dni" placeholder="DNI" title="Solo ingresar Números" v-if="!estado" v-model="mensaje.dni" class="uk-width-1-1 uk-input inputForm" >
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="nombreApellidos">{{placeholderNro}}</label>
                  <div class="uk-form-controls">
                        <input type="text" name="celular" title="Solo ingresar Números" :placeholder="placeholderNro" v-model="mensaje.celular" class="uk-width-1-1 uk-input inputForm" >
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="nombreApellidos">{{placeholderEmail}}</label>
                  <div class="uk-form-controls">
                       <input type="email" name="correo" title="Ingrese un correo válido" :placeholder="placeholderEmail" v-model="mensaje.email" class="uk-width-1-1 uk-input inputForm" required="required" >
                  </div>
                </div>
                <div class="uk-margin">
                   <label class="uk-form-label" for="nombreApellidos">Direccion</label>
                   <div class="uk-form-controls">
                       <input type="text" name="direccion"  placeholder="Dirección" v-model="mensaje.direccion" class="uk-width-1-1 uk-input inputForm">
                   </div>
                </div>
                <div class="imputsEmpresa" v-if="estado">
                  <div class="uk-margin">
                     <label class="uk-form-label" for="nombreApellidos">Razón Social</label>
                     <div class="uk-form-controls">
                        <input type="text" name="razonSocial" title="Ingrese su nombre" placeholder="Razon Social" v-model="mensaje.razonSocial" class="uk-width-1-1 uk-input inputForm" >                 
                    </div> 
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label" for="nombreApellidos">RUC</label> 
                    <div class="uk-form-controls">
                         <input type="text" name="RUC" title="Solo ingresar Números"  placeholder="RUC" v-model="mensaje.RUC" class="uk-width-1-1 uk-input inputForm" >
                    </div>
                  </div>
                </div>
                </div>
                <div class="">
                    <div class="uk-margin">
                        <label class="uk-form-label" for="nombreApellidos">Departamento</label>
                        <input type="text" name="departamento" placeholder="Departamento" v-model="mensaje.departamento" class="uk-width-1-1 uk-select  inputForm" >
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="nombreApellidos">Provincia</label>
                        <input type="text" name="provincia" placeholder="Provincia" v-model="mensaje.provincia" class="uk-width-1-1 uk-select  inputForm" >
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="nombreApellidos">Distrito</label>
                        <input type="text" name="distrito" placeholder="Distrito" v-model="mensaje.distrito" class="uk-width-1-1 uk-select inputForm" >
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="nombreApellidos">Comentarios</label>
                        <textarea name="comentarios" v-model="mensaje.comentario" required="required" placeholder="Escribe tu comentario" class="uk-width-1-1 uk-textarea inputForm" ></textarea>
                    </div>
                    </div>
                </div>
                <div class="uk-grid uk-child-width-1-2 uk-margin-bottom">
                  <div class="uk-animation-toggle" tabindex="0">
                   <div class="uk-text-right uk-animation-fade uk-animation-fast">
                     <button class="uk-button  uk-text-bold uk-button-default uk-button-large" type="submit">Guardar</button>
                   </div>
                  </div>    
                 <div class="uk-animation-toggle" tabindex="0">
                  <div class="uk-text-left uk-animation-fade uk-animation-fast">
                    <router-link to="/admin" class="uk-button uk-text-bold uk-button-default uk-button-large" >Cancelar</router-link>
                 </div>
                 </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Forms from "@/components/forms";
import {updateForms} from '@/services/services';
export default {
  data() {
    return {
      mensaje: {}, // forms pasado por la router
      estado: false,
      alerta:"",
      showAlert: false,

      placeholderNombre: "Nombre Completo",
      placeholderEmail: "Correo",
      placeholderNro: "Celular"
    };
  },
  components: {
    Forms
  },
  methods: {
    cargar() {
      this.mensaje = this.$route.params.form;
      this.estado = this.$route.params.status;
      if (this.estado) {
        this.placeholderNombre = "Nombre de Contacto";
        this.placeholderEmail = "Correo de Contacto";
        this.placeholderNro = "Número de Contacto";
        this.mensaje.nombreApellidos = this.mensaje.nombreContacto
        return { height: "140px" };
      } else {
        this.placeholderNombre = "Nombre Completo";
        this.placeholderEmail = "Correo";
        this.placeholderNro = "Celular";
        return { height: "90px" };
      }
    },
    update() {
        updateForms(this.mensaje,this.estado)
            .then(res =>{
              //  console.log(res)
                this.alerta = res.message
                this.showAlert = true
                this.mensaje = this.mensaje
            })
            .catch(err =>{
                console.log(err)
            })
    }
  },
  mounted() {
    this.cargar();
  }
};
</script>

<style>
.card {
  background-color: #fff;
  border: 1px solid snow;
  padding: 20px;
  border-radius: 2%;
}
.logo {
  width: 20%;
  margin-right: 20px;
}
</style>
