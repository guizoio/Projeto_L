const controllerProduto = require('../controllers/produto')
const UsuarioTokenAcesso = require('../common/protecaoTokenAcesso');
const Acesso = new UsuarioTokenAcesso();

module.exports = (server) => {

    server.get('/produto', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().consultar(req)
        res.send(result.recordset);
        return next();
    });

    server.get('/produto/ativos', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().consultarAtivos(req)
        res.send(result.recordset);
        return next();
    });

    server.get('/produto/:produtoId', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().obterPorId(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/produto', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().inserir(req)
        res.send(result.recordset);
        return next();
    });

    server.put('/produto', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().atualizar(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/produto/ativar', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerProduto.controllers().atualizarStatus(req)
        res.send(result.recordset);
        return next();
    });

}