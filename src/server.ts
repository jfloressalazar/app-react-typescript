// importar express
import express from 'express'

import router from './router' // importar router



// inicializar express
const app = express()

// habilitar el uso de json en express
app.use(express.json()) // habilitar el uso de json en express

// la ruta / es la ruta principal de la aplicacion puede variar si se coloca otro prefijo /api por ejemplo
app.use('/', router) // usar el router en la ruta /

export default app