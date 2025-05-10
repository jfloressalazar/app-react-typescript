// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'
import { body } from 'express-validator' // importar express-validator para validar los datos de entrada

// impotar la función de crear cuenta desde el archivo handlers
import { createAccount, login } from './handlers'
import { checkForErrors } from './middleware/validate-error-exists'


const router = Router()

// rutas para autenticación y registro
// imcorporar la función de crear cuenta al router
router.post('/auth/register',
    body('username').notEmpty().withMessage('El nombre de usuario es requerido'), // validar que el nombre de usuario no esté vacío
    body('email').isEmail().withMessage('El correo no es válido'), // validar que el correo sea un correo válido
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'), // validar que la contraseña tenga al menos 6 caracteres
    body('name').notEmpty().withMessage('El nombre es requerido'), // validar que el nombre no esté vacío
    checkForErrors, // LANZAR EL MIDDLEWARE DE VALIDACION DE ERRORES
    // checkForErrors se encarga de validar los datos de entrada y devolver un error si hay alguno
    createAccount)

router.post('/auth/login',
    body('email').isEmail().withMessage('El correo no es válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    checkForErrors, // LANZAR EL MIDDLEWARE DE VALIDACION DE ERRORES
    // checkForErrors se encarga de validar los datos de entrada y devolver un error si hay alguno
    login)

export default router