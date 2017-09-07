const Login = require('../models/login');

module.exports = {
    get(req, res, next) {
        Login.find({})
            .then(todo => res.send(todo))
            .catch(next);
    },
    create(req, res, next){
        
        const todoProps = req.body;

        Login.create(todoProps)
            .then(todo => res.send(todo))
            .catch(next)
    }

}
