// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'
import User from './models/User'
const router = Router()

// rutas para autenticación y registro
router.post('/auth/register', async (req, res) => {
    console.log(req.body)

    // iopcion 1 nsertar el usuario en la base de datos con el apartado body de la petición
    // await User.create(req.body)

    // opcion 2 crear una instancia del modelo de usuario con el body de la petición
    const usuario = new User(req.body)
    await usuario.save()

    // uso de response para enviar un mensaje de registro exitoso
    res.send('registro exitoso')

})

export default router