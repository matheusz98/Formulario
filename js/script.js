(function(){
    'use strict';
    var $form = document.querySelector('form');
    var $txtUsuario = document.getElementById('txtUsuario');
    var $txtSenha = document.getElementById('txtSenha');
    var $botao = document.getElementById('botao');

    //Executa a função ao submeter as informações
    $form.addEventListener('submit', function(e){
        //Se não tiver usuário ou senha digitados, será solicitado as informações
        if(!$txtUsuario.value || !$txtSenha.value){
            alert('Preencha todos os campos');
            //Previne o comportamento padrão (Envia o formulário)
            e.preventDefault();
        } else {
            alert('Seja bem-vindo!');
        }
    })
})();