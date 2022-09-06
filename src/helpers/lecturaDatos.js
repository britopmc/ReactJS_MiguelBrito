import { datosParaLectura } from "../data/products"


export const lecturaDatos = () => {

    return new Promise((resolve,reject) => {
  
      setTimeout(()=> {
        resolve(datosParaLectura)
      },2000)
    })
  }