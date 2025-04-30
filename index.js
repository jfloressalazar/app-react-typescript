// importar express
const express = require('express');

// inicializar express
const app = express()

// variable para mi puerto de servidor
const port = 8080

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


// arrancar el servidor usando el puerto 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
