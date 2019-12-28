const AcessoDados = require('../db/acessodados.js');
const db = new AcessoDados();
const ReadCommandSql = require('../common/readCommandSql');
const readCommandSql = new ReadCommandSql();

const controllers = () => {

    const consultar = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('consultar', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL);

        console.log(result);
        return result

    }

    const consultarAtivas = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('consultarAtivas', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL);

        console.log(result);
        return result

    }

    const obterPorId = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('obterPorId', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL, req.params);

        console.log(result);
        return result

    }

    const inserir = async (req) => {

        req.body.ativo = 1;

        var ComandoSQL = await readCommandSql.retornaStringSql('inserir', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const atualizar = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('atualizar', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const atualizarStatus = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('atualizarStatus', 'categoria');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    return Object.create({
        consultar
        , consultarAtivas
        , obterPorId
        , inserir
        , atualizar
        , atualizarStatus
    })

}

module.exports = Object.assign({ controllers })