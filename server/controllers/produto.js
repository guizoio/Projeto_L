const AcessoDados = require('../db/acessodados.js');
const db = new AcessoDados();
const ReadCommandSql = require('../common/readCommandSql');
const readCommandSql = new ReadCommandSql();

const controllers = () => {

    const consultar = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('consultar', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL);

        console.log(result);
        return result

    }

    const consultarAtivos = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('consultarAtivos', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL);

        console.log(result);
        return result

    }

    const obterPorId = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('obterPorId', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL, req.params);

        console.log(result);
        return result

    }

    const inserir = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('inserir', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const atualizar = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('atualizar', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    const atualizarStatus = async (req) => {

        var ComandoSQL = await readCommandSql.retornaStringSql('atualizarStatus', 'produto');
        var result = await db.ExecuteQuery(ComandoSQL, req.body);

        console.log(result);
        return result

    }

    return Object.create({
        consultar
        , consultarAtivos
        , obterPorId
        , inserir
        , atualizar
        , atualizarStatus
    })

}

module.exports = Object.assign({ controllers })