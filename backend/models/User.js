const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String,
    apellido: String,
    telephone: Number,
    email: String,
    street: String,
    numI: Number,
    numE: Number,
    codP: Number,
    colonia: String,
    mpio: String,
    estado: String,
    tipoV: {
        type: String,
        enum: ['Familiar', 'Huesped']
    },
    antigV: { type: String, enum: ['6_meses_a_1_anio', '2_a_5_anios', '5_anios_o_mas'] },
    imgProfile: {
        type: String,
        default: 'http://res.cloudinary.com/ironhackjorge/image/upload/v1563985540/MERN-Project/person-1.png.png'
    },
    imgId: {
        type: String,
    },
    role: {
        type: String,
        enum: ['USERF', 'USERM', 'ADMIN'],
        default: 'USERF'
    },
    location: {
        addres: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(PLM, { usernameField: 'telephone' })
module.exports = model('User', userSchema)