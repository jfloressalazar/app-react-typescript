import { Request, Response } from "express"
import { validationResult } from "express-validator" // importar express-validator para validar los datos de entrada
import slug from "slug"
import User from "../models/User"
import { hashearPassword, comparePassword } from "../utils/auth"

// Archivo para manejar las funciones que se llaman desde el router
export const createAccount = async (req: Request, res: Response) => {
    // manejo de errores de validación
    let errors = validationResult(req) // validar los datos de entrada

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() }) // si hay errores, devolver un error 400 con los errores
    }

    const email = req.body.email
    const password = req.body.password
    const username = slug(req.body.username, '') // convertir el nombre de usuario a un slug

    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('El correo ya existe')

        res.status(409).json({ error: error.message })
    }

    const usernameExists = await User.findOne({ username })
    if (usernameExists) {
        const error = new Error('El nombre de usuario ya existe')

        res.status(409).json({ error: error.message })
    }

    // ipcion 1 nsertar el usuario en la base de datos con el apartado body de la petición
    // await User.create(req.body)

    // opcion 2 crear una instancia del modelo de usuario con el body de la petición
    const usuario = new User(req.body)
    // asignar el hash de la contraseña al usuario
    usuario.password = await hashearPassword(password)
    // guardar el usuario en la base de datos
    await usuario.save()

    // uso de response para enviar un mensaje de registro exitoso
    res.status(201).send('registro exitoso')
}

export const login = async (req: Request, res: Response) => {
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() }) // si hay errores, devolver un error 400 con los errores
    }
    const email = req.body.email
    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error('El corre ingreado no existe con una cuenta asocuada')
        res.status(404).json({ error: error.message })
    }

    // verificar la contraseña
    const checkPassword = await comparePassword(req.body.password, user.password)
    if (!checkPassword) {
        const error = new Error('La contraseña es incorrecta')
        res.status(401).json({ error: error.message })
    }
    // si la contraseña es correcta, devolver un mensaje de inicio de sesión exitoso
    res.status(201).send('autenticación exitosa')
}