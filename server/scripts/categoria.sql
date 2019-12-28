
--#consultar#

SELECT                  
    CategoriaId
    ,Descricao
    ,CASE
        WHEN Ativo = 1 THEN '<span class="badge badge-success">Sim</span>'
        WHEN Ativo = 0 THEN '<span class="badge badge-danger">Não</span>'
    END [Ativo] 
FROM 
    Categoria

--END#consultar#

--#consultarAtivas#

SELECT                 
    CategoriaId
    ,Descricao
FROM 
    Categoria
WHERE
    Ativo = 1

--END#consultarAtivas#

--#obterPorId#

SELECT                 
    CategoriaId
    ,Descricao
FROM 
    Categoria
WHERE
    CategoriaId = @categoriaId

--END#obterPorId#


--#inserir#

BEGIN TRY
    BEGIN TRAN 

        INSERT INTO 
            Categoria
        values 
        (
            @descricao
            ,@ativo
        )
                
    COMMIT TRAN
        SELECT '{ "resultado" : "sucesso", "msg" : "Cadastro realizado com sucesso!" , "class" : "success" }' as retorno
END TRY
BEGIN CATCH                    
    ROLLBACK TRAN   
        SELECT '{ "resultado" : "erro", "msg" : "Cadastro não realizado!\n motivo:'+ ERROR_MESSAGE() +'" , "class" : "error" }' as retorno               
END CATCH 

--END#inserir#

--#atualizar#

BEGIN TRY
    BEGIN TRAN 

        UPDATE 
            Categoria
        SET 
            Descricao = @descricao
        WHERE
            CategoriaId = @categoriaId
                
    COMMIT TRAN
        SELECT '{ "resultado" : "sucesso", "msg" : "Cadastro atualizado com sucesso!" }' as retorno
END TRY
BEGIN CATCH                    
    ROLLBACK TRAN   
        SELECT '{ "resultado" : "erro", "msg" : "Cadastro não atualizado!\n motivo:'+ ERROR_MESSAGE() +'" }' as retorno               
END CATCH 

--END#atualizar#

--#atualizarStatus#

BEGIN TRY
    BEGIN TRAN 

        UPDATE 
            Categoria
        SET 
            Ativo = @ativo
        WHERE
            CategoriaId = @categoriaId
                
    COMMIT TRAN
        SELECT '{ "resultado" : "sucesso", "msg" : "Status atualizado com sucesso!" }' as retorno
END TRY
BEGIN CATCH                    
    ROLLBACK TRAN   
        SELECT '{ "resultado" : "erro", "msg" : "Status não atualizado!\n motivo:'+ ERROR_MESSAGE() +'" }' as retorno               
END CATCH   

--END#atualizarStatus#

