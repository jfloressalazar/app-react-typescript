// importar express
import express from 'express'

// inicializar express
const app = express()

// Routing

// ruta raiz
app.get('/', (req, res) => {
    res.send('Hola  mundo desde Express!')
})

// ruta a blog
app.get('/blog', (req, res) => {
    res.send('Bienvenido a mi blog!')
})
// ruta a ecommerce
app.get('/ecommerce', (req, res) => {
    res.send('Bienvenido a mi ecommerce!')
})
// ruta a contacto
app.get('/contacto', (req, res) => {
    res.send('Bienvenido a mi pagina de contacto!')
})

export default app