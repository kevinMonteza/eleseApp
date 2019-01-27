<template>
  <div class="section uk-container ">
    <div class="uk-flex uk-height-1-1 uk-flex-center card uk-section">
      <!-- NavBar-->
      <!--
        <div class="uk-navbar-container" uk-navbar>
            <h1 class="uk-text-uppercase k-text-center">Elese</h1>
        </div>
        
      -->
      <div class="uk-flex-row uk-height-1-1">
        <div class="uk-flex-column">
          <div class="uk-text-large">
            <div class="logo">
              <img src="../assets/logo_2.png" alt="Logo ELese">
            </div>
            <h2 class="uk-text-uppercase uk-padding-small uk-text-bold" style="color:#708787">Detalle de formularios de <span>{{(checked)?'Empresa':'Persona'}}s</span></h2>
          </div>
          <div>
            <table class="uk-table uk-table-large uk-table-hover uk-table-divider">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th colspan="2">Acciones</th>
                <th class="uk-table-shrink">
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
                <td @click="mostrar(form._id)">{{form.nombreContacto || form.nombreApellidos}}</td>
                <td class="uk-table-shrink">
                  <a @click.prevent="destroy(form._id)" class="uk-icon-button"><span uk-icon="trash"></span></a>
                </td>
                <td class="uk-table-shrink">
                  <router-link :to="{ name: 'Update', params:{form,status:checked}}"><span uk-icon="pencil"></span></router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getForms } from "../services/services.js";
import { deleteForms } from "../services/services.js";
export default {
  name: "viewAdmin",
  data() {
    return {
      data: [],
      checked: false
    };
  },
  mounted() {
    this.obtenerFomularios(this.checked);
  },
  methods: {
    obtenerFomularios(flag) {
      getForms(flag)
        .then(res => {
          //console.table(res);
          this.data = res;
        })
        .catch(e => {
          console.log(e);
        });
    },
    mostrar(id) {
      console.log(id);
    },
    async destroy(id) {
      const msj = await deleteForms(id, this.checked);
      console.log(msj);
      this.data = {};
      this.obtenerFomularios(this.checked);
    },
    isChecked() {
      console.log(this.checked);
      this.data = {};
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
  width: 50px;
  height: 34px;
}
titleCont:{
  color:#708787;
}
.section{
  padding-top: 20px;
}
.card {
  background-color: #fff;
  border: 1px solid snow;
  padding: 20px;
  border-radius: 2%;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.logo {
  width: 20%;
  margin-right: 20px;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
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
