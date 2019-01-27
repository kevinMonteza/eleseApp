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
                  <label class="uk-form-label" v-if="!estado" for="DNI">DNI</label>
                  <div class="uk-form-controls">
                        <input type="text" name="dni" placeholder="DNI" title="Solo ingresar Números" v-if="!estado" v-model="mensaje.dni" class="uk-width-1-1 uk-input inputForm" >
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="celular">{{placeholderNro}}</label>
                  <div class="uk-form-controls">
                        <input type="text" name="celular" title="Solo ingresar Números" :placeholder="placeholderNro" v-model="mensaje.celular" class="uk-width-1-1 uk-input inputForm" >
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="correo">{{placeholderEmail}}</label>
                  <div class="uk-form-controls">
                       <input type="email" name="correo" title="Ingrese un correo válido" :placeholder="placeholderEmail" v-model="mensaje.email" class="uk-width-1-1 uk-input inputForm" required="required" >
                  </div>
                </div>
                <div class="uk-margin">
                   <label class="uk-form-label" for="direccion">Direccion</label>
                   <div class="uk-form-controls">
                       <input type="text" name="direccion"  placeholder="Dirección" v-model="mensaje.direccion" class="uk-width-1-1 uk-input inputForm">
                   </div>
                </div>
                <div class="imputsEmpresa" v-if="estado">
                  <div class="uk-margin">
                     <label class="uk-form-label" for="razonSocial">Razón Social</label>
                     <div class="uk-form-controls">
                        <input type="text" name="razonSocial" title="Ingrese su nombre" placeholder="Razon Social" v-model="mensaje.razonSocial" class="uk-width-1-1 uk-input inputForm" >                 
                    </div> 
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label" for="RUC">RUC</label> 
                    <div class="uk-form-controls">
                         <input type="text" name="RUC" title="Solo ingresar Números"  placeholder="RUC" v-model="mensaje.RUC" class="uk-width-1-1 uk-input inputForm" >
                    </div>
                  </div>
                </div>
                </div>
                <div class="">
                  <div class="uk-margin">
                <!-- <input type="text" name="departamento"  placeholder="Departamento" v-model="mensaje.departamento" class=" uk-input  " > -->
                      <label class="uk-form-label" for="Departamento">Departamento</label> 
                      <div class="uk-form-controls">
                        <select name="departamentos" class="uk-width-1-1 uk-select inputForm" v-model="mensaje.departamento">
                          <option value="departamento" selected>Departamento</option>
                          <option  @click="getProvincias(depa.id_ubigeo)" v-for="depa in departamentos" :key="depa.id_ubigeo" :value="depa.id_ubigeo">{{depa.nombre_ubigeo}}</option>
                        </select>
                      </div>
                  </div>
                  <div class="uk-margin">
                    <!-- <input type="text" name="provincia" placeholder="Provincia" v-model="mensaje.provincia"  class="uk-width-1-1 uk-input  inputForm" > -->
                     <label class="uk-form-label" for="provincias">Provincia</label>
                     <div class="uk-form-controls">
                       <select name="provincias" class="uk-width-1-1 uk-select inputForm" v-model="mensaje.provincia">
                          <option value="provincia" selected>Provincia</option>
                          <option :value="prov.id_ubigeo" @click="getDistritos(prov.id_ubigeo)" v-for="prov in provinciasById" :key="prov.id_ubigeo">{{prov.nombre_ubigeo}}</option>
                       </select>
                     </div>
                  </div>
                <div class="uk-margin">
                  <!-- <input type="text" name="distrito" placeholder="Distrito" v-model="mensaje.distrito" class="uk-width-1-1 uk-input  inputForm" > -->
                   <label class="uk-form-label" for="distritos">Distrito</label>
                    <div class="uk-form-controls">
                      <select name="distritos" class="uk-width-1-1 inputForm uk-select" v-model="mensaje.distrito">
                         <option value="distrito" selected>Distrito</option>
                         <option :value="dis.id_ubigeo" v-for="dis in distritosById" :key="dis.id_ubigeo">{{dis.nombre_ubigeo}}</option>
                      </select>
                    </div>
                    
                </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="comentarios">Comentarios</label>
                        <textarea name="comentarios" v-model="mensaje.comentario" required="required" :style="resizing" placeholder="Escribe tu comentario" class="uk-width-1-1 uk-textarea inputForm" ></textarea>
                    </div>
                </div>
                </div>
                <div class="uk-grid uk-child-width-1-2 uk-margin-bottom">
                  <div class="uk-animation-toggle" tabindex="0">
                   <div class="uk-text-right uk-animation-fade uk-animation-fast">
                     <button class="uk-button  uk-text-bold uk-button-default uk-button-large" type="submit">Actualizar</button>
                   </div>
                  </div>    
                 <div class="uk-animation-toggle" tabindex="0">
                  <div class="uk-text-left uk-animation-fade uk-animation-fast">
                    <router-link to="/admin" class="uk-button uk-text-bold uk-button-default uk-button-large" >Regresar</router-link>
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

import depa from '@/data/departamentos.js'
import prov from '@/data/provincias.js'
import distri from '@/data/distritos.js'
export default {
  data() {
    return {
      mensaje: {}, // forms pasado por la router
      estado: false,
      alerta:"",
      showAlert: false,
      departamentos: [],
      provincias: [],
      distritos: [],
      provinciasById:[],
      distritosById:[],

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
     // console.log(this.mensaje)
      this.getProvincias(this.mensaje.departamento)
      this.getDistritos(this.mensaje.provincia)

      if (this.estado) {
        this.placeholderNombre = "Nombre de Contacto";
        this.placeholderEmail = "Correo de Contacto";
        this.placeholderNro = "Número de Contacto";
        this.mensaje.nombreApellidos = this.mensaje.nombreContacto
       
      } else {
        this.placeholderNombre = "Nombre Completo";
        this.placeholderEmail = "Correo";
        this.placeholderNro = "Celular";
        
      }
    },
    update() {
      console.log(this.mensaje)
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
    },
    getProvincias(id){
     // console.log(id)
      for(const prov in this.provincias){
          if(id === prov){
            this.provinciasById= this.provincias[prov];
          }
      }
     // console.log(this.provinciasById);
    },
    getDistritos(id) {
      //console.log(id)
      for(const dis in this.distritos){
          if(id === dis){
            this.distritosById= this.distritos[dis];
          }
      }
     //console.log(this.distritosById);
    }
  },
  mounted() {
    this.departamentos = depa
    this.provincias = prov
    this.distritos = distri
   // console.log(this.provincias)

    this.cargar();
  },
  computed: {
    resizing(){
      if(this.estado){
         return { height: "215px" };
      }else{
        return { height: "124px" };
      }
    }
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
