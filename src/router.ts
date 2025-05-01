// Este archivo se encarga de definir las rutas de la aplicación
import { Router } from 'express'
const router = Router()

// rutas para autenticación y registro
router.post('/auth/register', (req, res) => {
    console.log('Desde register...')
})

export default router