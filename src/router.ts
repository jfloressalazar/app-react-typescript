// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'
import { body } from 'express-validator' // importar express-validator para validar los datos de entrada

// impotar la función de crear cuenta desde el archivo handlers
import { createAccount } from './handlers'


const router = Router()

// rutas para autenticación y registro
// imcorporar la función de crear cuenta al router
router.post('/auth/register',
    body('username').notEmpty().withMessage('El nombre de usuario es requerido'), // validar que el nombre de usuario no esté vacío
    body('email').isEmail().withMessage('El correo no es válido'), // validar que el correo sea un correo válido
    createAccount)

export default router