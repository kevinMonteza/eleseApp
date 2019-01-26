<template>
      <div class="uk-grid uk-child-width-1-2@m form">
        <div>
        <div>
          <input type="text" name="nombreApellidos" :placeholder="placeholderNombre" v-model="mensaje.nombreApellidos" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="text" name="dni" placeholder="DNI"  v-if="!estado" v-model="mensaje.dni" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="text" name="celular" :placeholder="placeholderNro" v-model="mensaje.celular" class="uk-width-1-1 uk-input  inputForm">
        </div>
        <div>
          <input type="email"  name="correo" :placeholder="placeholderEmail" v-model="mensaje.email" class="uk-width-1-1 uk-input  inputForm" required="required" >
        </div>
        <div>
          <input type="text" name="direccion"  placeholder="Dirección"  v-model="mensaje.direccion" class="uk-width-1-1 uk-input  inputForm" >
        </div>
        <div class="imputsEmpresa" v-if="estado">
          <div>
            <input type="text" name="razonSocial" placeholder="Razon Social" v-model="mensaje.razonSocial" class="uk-width-1-1 uk-input  inputForm" >
          </div>
          <div>
            <input type="text" name="RUC" placeholder="RUC" v-model="mensaje.RUC" class="uk-width-1-1 uk-input  inputForm">
          </div>
        </div>
      </div>
      <div>
        <div>
          <input type="text" name="departamento"  placeholder="Departamento" v-model="mensaje.departamento" class="uk-width-1-1 uk-input  inputForm" >
        </div>
        <div>
          <input type="text" name="provincia" placeholder="Provincia" v-model="mensaje.provincia"  class="uk-width-1-1 uk-input  inputForm" >
        </div>
        <div>
          <input type="text" name="distrito" placeholder="Distrito" v-model="mensaje.distrito" class="uk-width-1-1 uk-input  inputForm" >
        </div>
        <div>
          <textarea name="comentarios" v-model="mensaje.comentario" required="required" placeholder="Escribe tu comentario" class="uk-width-1-1 uk-textarea inputForm" :style="resizing"></textarea>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: "forms",
  props: ["estado", "mensaje"],
  data() {
    return{
      placeholderNombre: "Nombre Completo",
      placeholderEmail: "Correo",
      placeholderNro: "Celular"
    }
  },
  computed: {
    resizing () {
      if( this.estado ) { 
        this.placeholderNombre="Nombre de Contacto"
        this.placeholderEmail= "Correo de Contacto"
        this.placeholderNro= "Número de Contacto"
        return { height: '140px' };
      }else{
        this.placeholderNombre="Nombre Completo"
        this.placeholderEmail= "Correo"
        this.placeholderNro= "Celular"
        return { height: '90px' }
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
.form {
    width: 80%;
    margin: auto;
}
</style>
