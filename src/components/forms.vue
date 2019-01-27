<template>
      <div class="uk-grid uk-child-width-1-2@m form">
        <div>
        <div>
          <input type="text" name="nombreApellidos" :placeholder="placeholderNombre" v-model="mensaje.nombreApellidos" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="text" name="dni" pattern="^(0|[0-9][0-9]*)$" placeholder="DNI" title="Solo ingresar Números" v-if="!estado" v-model="mensaje.dni" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="text" name="celular" pattern="^(0|[0-9][0-9]*)$" title="Solo ingresar Números" :placeholder="placeholderNro" v-model="mensaje.celular" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="email"  name="correo" title="Ingrese un correo válido" :placeholder="placeholderEmail" v-model="mensaje.email" class="uk-width-1-1 uk-input  inputForm" required="required" >
        </div>
        <div>
          <input type="text" name="direccion"  placeholder="Dirección"  v-model="mensaje.direccion" class="uk-width-1-1 uk-input  inputForm" >
        </div>
        <div class="imputsEmpresa" v-if="estado">
          <div>
            <input type="text" name="razonSocial" title="Ingrese su nombre" placeholder="Razon Social" v-model="mensaje.razonSocial" class="uk-width-1-1 uk-input  inputForm" >
          </div>
          <div>
            <input type="text" name="RUC" pattern="^(0|[0-9][0-9]*)$" title="Solo ingresar Números" placeholder="RUC" v-model="mensaje.RUC" class="uk-width-1-1 uk-input  inputForm">
          </div>
        </div>
      </div>
      <div>
        <div>
         <!-- <input type="text" name="departamento"  placeholder="Departamento" v-model="mensaje.departamento" class=" uk-input  " > -->
          <select name="departamentos" class="uk-width-1-1 inputForm" v-model="mensaje.departamento">
            <option value="departamento" selected>Departamento</option>
            <option  @click="getProvincias(depa.id_ubigeo)" v-for="depa in departamentos" :key="depa.id_ubigeo" :value="depa.id_ubigeo">{{depa.nombre_ubigeo}}</option>
          </select>
        </div>
        <div>
         <!-- <input type="text" name="provincia" placeholder="Provincia" v-model="mensaje.provincia"  class="uk-width-1-1 uk-input  inputForm" > -->
          <select name="provincias" class="uk-width-1-1 inputForm" v-model="mensaje.provincia">
            <option value="provincia" selected>Provincia</option>
            <option :value="prov.id_ubigeo" @click="getDistritos(prov.id_ubigeo)" v-for="prov in provinciasById" :key="prov.id_ubigeo">{{prov.nombre_ubigeo}}</option>
          </select>
        </div>
        <div>
          <!-- <input type="text" name="distrito" placeholder="Distrito" v-model="mensaje.distrito" class="uk-width-1-1 uk-input  inputForm" > -->
           <select name="distritos" class="uk-width-1-1 inputForm" v-model="mensaje.distrito">
            <option value="distrito" selected>Distrito</option>
            <option :value="dis.id_ubigeo" v-for="dis in distritosById" :key="dis.id_ubigeo">{{dis.nombre_ubigeo}}</option>
          </select>
        </div>
        <div>
          <textarea name="comentarios" v-model="mensaje.comentario" required="required" placeholder="Escribe tu comentario" class="uk-width-1-1 uk-textarea inputForm" :style="resizing"></textarea>
        </div>
      </div>
      </div>
</template>

<script>
import depa from '@/data/departamentos.js'
import prov from '@/data/provincias.js'
import distri from '@/data/distritos.js'
export default {
  name: "forms",
  props: ["estado", "mensaje"],
  data() {
    return{
      placeholderNombre: "Nombre Completo",
      placeholderEmail: "Correo",
      placeholderNro: "Celular",
      departamentos: [],
      provincias: [],
      distritos: [],
      provinciasById:[],
      distritosById:[]
    }
  },
  methods:{
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
     // console.log(this.distritosById);
    }
  },
  mounted(){
    this.departamentos = depa
    this.provincias = prov
    this.distritos = distri
    console.log(this.departamentos)
    console.log(this.provincias)
    console.log(this.distritos)
  },
  computed: {
    resizing () {
      if( this.estado ) { 
        this.placeholderNombre="Nombre de Contacto"
        this.placeholderEmail= "Correo de Contacto"
        this.placeholderNro= "Número de Contacto"
        return { height: '164px' };
      }else{
        this.placeholderNombre="Nombre Completo"
        this.placeholderEmail= "Correo"
        this.placeholderNro= "Celular"
        return { height: '115px' }
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputForm {
  background-color: rgba(6,113,112,.7);
  padding: 5px;
  margin-bottom: 10px;
  color: #fff;
}
.textArea{
  height: 140px;
}
@media only screen and (min-width: 600px){
 .form {
    width: 80%;
    margin: auto;
}
}

</style>
