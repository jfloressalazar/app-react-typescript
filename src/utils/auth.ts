// Archivo para manejar las funciones relacionadas a la autenticación y autorización de usuarios
import bcrypt from 'bcrypt'

export  const hashearPassword =  async (password: string) => {
    const salt = await bcrypt.genSalt(10) // generar un salt para el hash
    return await bcrypt.hash(password, salt) // hashear la contraseña con el salt
}