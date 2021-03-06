const db = require('../services/mysql');

const routes = (server) => {
    server.post('autenticacao', async (req, res, next) => {
        try {
            const {email, password} = req.params;
            if(!email || !password){
                res.send({error: 'email ou senha não fornecidos'});
                return;
            }
            res.send(await db.auth().authenticate(email, password));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.get('categoria', async (req, res, next) => {
        try {
            res.send(await db.categories().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('categoria', async (req, res, next) => {
        const { name } = req.params;
        try {
            res.send(await db.categories().save(name));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.put('categoria', async (req, res, next) => {
        const { id, name } = req.params;
        try {
            res.send(await db.categories().update(id, name));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.del('categoria', async (req, res, next) => {
        const { id } = req.params;
        try {
            res.send(await db.categories().del(id));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.get('/', (req, res, next) => {
        res.send('Webservice de categorias do curso Webservice RESTful com Node.js, Restify e MySQL - Fábio Vedovelli');
        next();
    });
}

module.exports = routes;
