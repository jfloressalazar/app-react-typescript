import mongoose, { Schema } from "mongoose";

// definimos la interfaz de usuario para el modelo de usuario
export interface UserInterface {
    name: string;
    email: string;
    username: string;
    password: string;
}

//definiendo el esquema de usuario o estructura de la base de datos 
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
})

//definiendo el Modelo de usuario y agregando el interface de usuario por medio de generics
const User = mongoose.model<UserInterface>("User", userSchema)
// Exportando el modelo de usuario
export default User