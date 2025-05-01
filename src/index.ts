import server from './server'

// variable de entorno para puerto de servidor ó 8080 por defecto
const port = process.env.PORT || 8080


// arrancar el servidor usando el puerto 8080
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
