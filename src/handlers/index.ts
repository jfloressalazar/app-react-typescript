import { Request, Response } from "express"
import User from "../models/User"

// Archivo para manejar las funciones que se llaman desde el router
export const createAccount = async (req: Request, res: Response) => {
    
    const email = req.body.email

    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('El correo ya existe')
        
        res.status(409).json({ error: error.message })
    }

    
    // ipcion 1 nsertar el usuario en la base de datos con el apartado body de la petición
    // await User.create(req.body)

    // opcion 2 crear una instancia del modelo de usuario con el body de la petición
    const usuario = new User(req.body)
    await usuario.save()

    // uso de response para enviar un mensaje de registro exitoso
    res.status(201).send('registro exitoso')
}