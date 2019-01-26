<template>
  <div>
    <h2>Detalles de formularios</h2>
    <table>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th colspan="2">Acciones</th>
        <th>
          <label class="switch">
          <input type="checkbox" v-model="checked" @click="isChecked" id="checkbox">
          <span class="slider round"></span>
        </label>
        <label>
          <span>{{(checked)?'Empresa':'Persona'}}</span>
        </label>
        </th>
       
      </tr>
      <tr v-for="(form, index) in this.data" :key="form._id">
          <td>{{index + 1}}</td>
          <td @click="mostrar(form._id)">{{form.nombreApellidos}}</td>
          <td><button @click="destroy(form._id)">X</button></td>
          <td><button>Editar</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import {getForms} from "../services/services.js"
import {deleteForms} from '../services/services.js'
export default {
  name: 'viewAdmin',
  data () {
    return{
      data: [],
      checked: false
    }
  },
  mounted() {
    this.obtenerFomularios(this.checked)
  },
  methods: {
    obtenerFomularios (flag){
      getForms (flag)
        .then(res => {
          //console.log(res[0]._id);
          this.data =  res
        })
        .catch(e => {
          console.log(e);
        });
    },
    mostrar (id){
      console.log(id)
    },
    async destroy (id) {
      const msj = await deleteForms(id, this.checked)
      console.log(msj);
      this.data={}
      this.obtenerFomularios(this.checked)
    },
    isChecked () {
      console.log(this.checked);
      this.data= {}
      this.obtenerFomularios(!this.checked);
    }
  }
};
</script>

<style>
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>
