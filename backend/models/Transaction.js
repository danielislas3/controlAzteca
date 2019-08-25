const { Schema, model } = require('mongoose')


const transactionSchema = new Schema({
    concepto: String,
    monto: Number,
    tipo: {
        type: String,
        enum: ['Egreso', 'Ingreso'],
    },
    categoria: {
        type: String,
        enum: ['Servicios', 'Mercancia', 'Combustibles', 'Salud', 'Alimentos', 'Educación', 'Peaje', 'Transporte']
    },
    unidad: {
        type: String,
        enum: ['Litros', 'Pieza', 'Kilogramos', 'N/A']
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Transaction', transactionSchema)