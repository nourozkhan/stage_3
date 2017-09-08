const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    particular_doctor: {
        type: String,
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    diseases: {
        type: String,
        required: true
    },
    medication: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
