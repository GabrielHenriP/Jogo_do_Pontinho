let pontos = 0

function closeLogin(objeto){
    let userName = document.body.querySelector('#nomeUsuario').value;
    let code = document.body.querySelector('#codigo').value;
    let form = document.querySelector('.form-container');

    if( objeto.value === 'jogar' ) {
        console.log('jogaaar')
        if( userName.length === 0 || code.length === 0 ){
            alert('Digite o nome de usuário e o código da sala para jogar')
        } else {
            form.parentNode.removeChild(form);
            gerarAutomaticamenteBalao()
            return;
        }

    }else if( objeto.value === 'criar_sala'){
        console.log('criar sssala')
        if( userName.length === 0){
            alert('Digite seu nome de usuário para criar a sala')
        } else {
            form.parentNode.removeChild(form);
            changeHeader();
            botaoInicial();
            return;
        }
    }
    
    
}

function criarBalao() {
    var balao = document.createElement('div');
    balao.setAttribute("class",'balao');

    //var x = Math.floor(Math.random()*window.innerWidth-50);
    //var y = Math.floor(Math.random()*(window.innerHeight-50)) + 60 ;
    var x = Math.floor(Math.random()*window.innerWidth-50);
    var y = Math.floor(Math.random()*(window.innerHeight-50)) + 60 ;

    balao.setAttribute('style','left:'+x+'px; top:'+y+'px');
    balao.setAttribute('onclick','estourarBalao(this)');

    document.body.appendChild(balao)
}

function estourarBalao(objeto) {
    document.body.removeChild(objeto)

    pontos++;
    var score = document.getElementById('score')
    score.innerHTML = `Balões estourados: ${pontos}`

    document.body.appendChild(score)
}

function gerarAutomaticamenteBalao() {
    
    setInterval(criarBalao,250)
    
}


function botaoInicial() {
    var botao = document.createElement('button');
    botao.setAttribute('class','botaodeIniciar');
    botao.setAttribute('onclick','iniciarJogo(this)');
    botao.innerHTML = "INICIAR";

    document.body.appendChild(botao);
}


function iniciarJogo(objeto) {
    document.body.removeChild(objeto)
    gerarAutomaticamenteBalao()
    
}

function changeHeader(){
    
    let header_inGame = document.body.querySelector('.header-inGame');
    header_inGame.setAttribute('style', 'display:flex')
    console.log(header_inGame.id)
    

    let header_login = document.body.querySelector('.header-login');
    header_login.setAttribute('style', 'display:none')
    //document.body.header.appendChild(header_inGame);
    //header_login.parentNode.removeChild(header_login);

}




