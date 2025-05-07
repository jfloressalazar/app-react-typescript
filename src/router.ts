// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'

// impotar la función de crear cuenta desde el archivo handlers
import { createAccount } from './handlers'


const router = Router()

// rutas para autenticación y registro
// imcorporar la función de crear cuenta al router
router.post('/auth/register', createAccount)

export default router