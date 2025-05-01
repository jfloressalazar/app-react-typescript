// importar express
import express from 'express'
import 'dotenv/config' // importar dotenv para cargar las variables de entorno  
import router from './router' // importar router
import {connectDB} from './config/db' // importar la funcion connectDB para conectar a la base de datos


// inicializar express
const app = express()

connectDB() // conectar a la base de datos

// habilitar el uso de json en express
app.use(express.json()) // habilitar el uso de json en express

// la ruta / es la ruta principal de la aplicacion puede variar si se coloca otro prefijo /api por ejemplo
app.use('/', router) // usar el router en la ruta /

export default app