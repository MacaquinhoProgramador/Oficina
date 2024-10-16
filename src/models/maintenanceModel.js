import { Schema, model } from 'mongoose';

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'workshop',
        required: true
    },

    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'vehicle',
        required: true
    },
    
    services: [{
        type: Array,
        required: true,
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],

    date: {
        type: Date,
        required: true
    },

    totalCost: {
        type: Number,
        required: true
    },
    
})

export default model('Maintenance', maintenanceSchema);