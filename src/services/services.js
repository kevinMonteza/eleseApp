import axios from 'axios'


const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type'
}
let urlPersona =  'http://localhost:3000/persona/'
let urlEmpresa =  'http://localhost:3000/empresa/'
export const servicePost = async (data, estado) => {
  let urlAux = urlPersona
  if(estado) {
    urlAux = urlEmpresa
  }
  const res = await axios.post(urlAux, data, headers)
  const datos = await res.data
  return datos
}

export const getForms = async (estado) => {
  let urlAux = urlPersona
  if(estado) {
    urlAux = urlEmpresa
  }
  const res = await axios.get(urlAux)
  const datos = await res.data.formDB
  return datos
}

export const deleteForms = async (id,estado) => {
  let urlAux = urlPersona
  if(estado) {
    urlAux = urlEmpresa
  }
  urlAux = urlAux.concat(id)
  console.log(urlAux)
  const res = await axios.delete(urlAux)
  const datos = await res.data.message
  return datos
}
