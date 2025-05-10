import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const checkForErrors = (req: Request, res: Response, next: NextFunction) => {
    // middleware para manejar los errores de validación
    // este middleware se encarga de validar los datos de entrada y devolver un error si hay alguno
    // se usa en las rutas de autenticación y registro
    // se usa el middleware de express-validator para validar los datos de entrada

    let errors = validationResult(req) // validar los datos de entrada

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() }) // si hay errores, devolver un error 400 con los errores
    }

    next() // si no hay errores, continuar con la siguiente función
    // next() se usa para continuar con la siguiente función en la cadena de middleware
}