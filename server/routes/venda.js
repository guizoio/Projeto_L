const controllerVenda = require('../controllers/venda')
const UsuarioTokenAcesso = require('../common/protecaoTokenAcesso');
const Acesso = new UsuarioTokenAcesso();

module.exports = (server) => {

    server.post('/venda', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerVenda.controllers().inserir(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/venda/produto', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerVenda.controllers().inserirProdutoVenda(req)
        res.send(result.recordset);
        return next();
    });

    server.post('/venda/historico', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerVenda.controllers().historico(req)
        res.send(result.recordset);
        return next();
    });

    server.get('/venda/historico/:vendaId', Acesso.verificaTokenAcesso, async (req, res, next) => {
        const result = await controllerVenda.controllers().detalhesVenda(req)
        res.send(result.recordset);
        return next();
    });

}

