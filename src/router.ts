// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'
const router = Router() 

router.get('/', (req, res) => {
    res.send('Hola  mundo desde Express!')
})

// ruta a blog
router.get('/blog', (req, res) => {
    res.send('Bienvenido a mi blog!')
})
// ruta a ecommerce
router.get('/ecommerce', (req, res) => {
    res.send('Bienvenido a mi ecommerce!')
})
// ruta a contacto
router.get('/contacto', (req, res) => {
    res.send('Bienvenido a mi pagina de contacto!')
})

export default router