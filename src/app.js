import express from "express"; //requerimos expres
// Recuerda que para usar import debes apregar en el .js  "type" : "module", despues del main y antes del script
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

import indexRoutes from './routes/index.js'

const app = express(); //le asignamos a una variable la fución express

const _dirname= dirname(fileURLToPath(import.meta.url))

app.set("views", join(_dirname, 'views'))
app.set('view engine', 'ejs'); //le decimos a la aplicación que vamos a estar usando archivos .ejs (son html que permiten manejos de variables)
app.use(indexRoutes);



const PUERTO = process.env.PORT || 3000;//le decimos que al constante PUERTO sea el puerto que le asigna el browser o el 3000
app.listen(PUERTO, () => { //hacemos que el demon escuche 
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
