const Patient = require('../models/patient');

module.exports = {
    create(req, res, next) {
        const patientProps = req.body;

        Patient.create(patientProps)
            .then(patient => res.send(patient))
            .catch(next)
    },

    get(req, res, next) {
        Patient.find({})
            .then(patients => res.send(patients))
            .catch(next);
    }

}
