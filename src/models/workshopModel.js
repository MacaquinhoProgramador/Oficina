import { Schema, model } from 'mongoose';

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    specialties: [{
        type: Array,
        required: true
    }]
})

export default model('Workshop', workshopSchema);