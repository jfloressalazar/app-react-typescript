import mongoose, { Schema } from "mongoose";

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
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
})

//definiendo el Modelo de usuario
const User = mongoose.model("User", userSchema)
// Exportando el modelo de usuario
export default User