const AcessoDados = require('../db/acessodados.js');
const db = new AcessoDados();
const ReadCommandSql = require('../common/readCommandSql');
const readCommandSql = new ReadCommandSql();

const controllers = () => {

    const inserir = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('inserir', 'venda');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const inserirProdutoVenda = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('inserirProdutoVenda', 'venda');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const historico = async (req) => {

        req.body.cliente = `%${req.body.cliente}%`;

        var ComandoSQL = await readCommandSql.retornaStringSql('historico', 'venda');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const detalhesVenda = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('detalhesVenda', 'venda');
        var result = await db.ExecuteQuery(ComandoSQL, req.params);

        console.log(result);
        return result

    }

    return Object.create({
        inserir
        , inserirProdutoVenda
        , historico
        , detalhesVenda
    })

}

module.exports = Object.assign({ controllers })