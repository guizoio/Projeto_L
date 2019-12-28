const controllerCategoria = require('../controllers/categoria')
const UsuarioTokenAcesso = require('../common/protecaoTokenAcesso');
const Acesso = new UsuarioTokenAcesso();

module.exports = (server) => {

    
    server.get('/categoria', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().consultar(req)
        res.send(result.recordset);
        return next();
    });
    
    server.get('/categoria/ativas', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().consultarAtivas(req)
        res.send(result.recordset);
        return next();
    });

    server.get('/categoria/:categoriaId', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().obterPorId(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/categoria', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().inserir(req)
        res.send(result.recordset);
        return next();
    });

    server.put('/categoria', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().atualizar(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/categoria/ativar', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerCategoria.controllers().atualizarStatus(req)
        res.send(result.recordset);
        return next();
    });

}