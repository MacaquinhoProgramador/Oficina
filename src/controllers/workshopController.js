import Workshop from '../models/workshopModel.js';

// store, index, update, destroy

export const store = async(req, res) => {
    try {
        const workshop = await Workshop.create(req.body);
        return res.status(201).json(workshop);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async(req, res) => {
    try {
        const workshop = await Workshop.find().exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(400).json({ message: error.messagge });
    }
};

export const update = async(req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async(req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

