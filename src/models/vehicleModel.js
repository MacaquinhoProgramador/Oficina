import { Schema, model } from 'mongoose';

const vehicleSchema = new Schema({
    plate: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        require: true
    },

    owner: {
        type: String,
        require: true
    },

    maintenances: [{
        type: Schema.Types.ObjectId,
        ref: 'Maintenances',
        required: true
    }]
})

export default model('Vehicle', vehicleSchema);