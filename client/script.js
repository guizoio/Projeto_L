jQuery(document).ready(function() {
    jQuery('.load').hide();
});

function sleep (time) {
    jQuery('.load').show();
    return new Promise((resolve) => setTimeout(resolve, time));
}

jQuery("#btnCadastrar").on('click', () => {
    validaCampos(); 
});

// function teste(){
//     validaCampos(); 
//     // sleep(2000).then(() => {
//     //     $(document).ready(function() {

//     //     });
//     //     window.location.assign("index.html");   
//     // });
// }


async function validaCampos(){
    var controle=0;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var nick = document.getElementById("nick").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    if(login == "" || login == " " || login == null || login.length < 4){
        alert("ALERTA \nLogin não valido");
        controle = 1;
    }
    else if(senha == "" || senha == " " || senha == null || senha.length < 4){
        alert("ALERTA \nSenha não valido");
        controle = 1;
    }
    else if(nick == "" || nick == " " || nick == null){
        alert("POR GENTILEZA INFORMAR NICK");
        controle = 1;
    }
    else if(nome == "" || nome == " " || nome == null){
        alert("POR GENTILEZA INFORMAR NOME");
        controle = 1;
    }
    else if(email == "" || email == " " || email == null){
        alert("POR GENTILEZA INFORMAR E-MAIL");
        controle = 1;
    }
    else{
        controle=2;
    }
    if(controle == 2){
        alert("CADASTRO");

        var dados = {
            login : login,
            senha : senha,
            nick : nick,
            nome : nome,
            email : email
        }

        await adicionar(dados);

    }
}

async function adicionar(dados){
    alert("função");
    alert(dados);
    app.metodos.post('/cadastro', JSON.stringify(dados),
            (response) => {
                alert(response);
                alert("aqui");
                console.log(response);
                var data = JSON.parse(response[0].retorno);
                if (data.resultado == "erro") {
                    app.metodos.mensagem("Falha ao realizar operação. Tente novamente.");
                    console.log("Erro interno: ", data.msg);
                    alert("ERRO");
                    return;
                }
                if (data.resultado == "sucesso") {
                    alert("certo");
                    //app.metodos.mensagem(data.msg, 'green');
                }            
            },
            (xhr, ajaxOptions, error) => {
                console.log('xhr', xhr);
                console.log('ajaxOptions', ajaxOptions);
                console.log('error', error);
                app.metodos.mensagem("Falha ao realizar operação. Tente novamenteeee.");
                return;
            }
        );
}