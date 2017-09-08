const Patient = require('../models/patient');

module.exports = {
    create(req, res, next) {
        const patientProps = req.body;

        Patient.create(patientProps)
            .then(patient => res.send(patient))
            .catch(next)
    },

    get(req, res, next) {
        var particularDocName = req.body.particular_doctor
        Patient.find({particular_doctor: particularDocName}, function(err, founded){
            res.send(founded)
        }).catch(next);
    }

}
