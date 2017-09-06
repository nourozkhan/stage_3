const PatientsController = require('../controllers/patient_controller');
const LoginController = require('../controllers/login_controller');

module.exports = (app) => {
    app.get('/api/patient', PatientsController.get );
    app.post('/api/patient', PatientsController.create );
    app.get('/api/login', LoginController.get );
    app.post('/api/login', LoginController.create );   
}