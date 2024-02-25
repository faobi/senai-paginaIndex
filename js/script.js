//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

//Validação de Login
function login(){
    var logado = false;
    
    while(logado === false){
        var user = document.getElementById('usuario').value;
        var senha = document.getElementById('senha').value;

        if(user === 'admin' && senha === '@1234'){
            window.location = 'index.html';
            logado = true;
            alert('logado')
        } else{
            alert('dados invalidos. tente outra vez');
            var inputUser = document.getElementById('usuario')
            inputUser.focus()
            break;
            
        }
    }

}

//Ativar alert no botão cadastrar

function cadastro(){
    alert('cadastrado com sucesso');
    window.location.href = 'index.html'   
}
