let pontos = 0



function closeLogin(objeto){
    let userName = document.body.querySelector('#nomeUsuario').value;
    let code = document.body.querySelector('#codigo').value;
    let form = document.querySelector('.form-container');

    if( objeto.value === 'Jogar' ) {
        //console.log('jogaaar')
        if( userName.length === 0 || code.length === 0 ){
            alert('Digite o nome de usuário e o código da sala para jogar')
        } else {
            form.parentNode.removeChild(form);
            gerarAutomaticamenteBalao()
            return;
        }

    }else if( objeto.value === 'Criar sala'){
       // console.log('criar sssala')
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


function changeHeader(){
    
    let header_inGame = document.body.querySelector('.header-inGame');
    header_inGame.setAttribute('style', 'display:flex')
    console.log(header_inGame.id)
    

    let header_login = document.body.querySelector('.header-login');
    header_login.setAttribute('style', 'display:none')
    //document.body.header.appendChild(header_inGame);
    //header_login.parentNode.removeChild(header_login);

}


function criarBalao() {
    var balao = document.createElement('div');
    balao.setAttribute("class",'balao');

    //var x = Math.floor(Math.random()*window.innerWidth-50);
    //var y = Math.floor(Math.random()*(window.innerHeight-50)) + 60 ;
    

    

    let areaDeJogo = document.body.querySelector('.container-do-jogo .area-deJogo')

    let min = 5;
    let max = 30;

    let x = Math.floor(Math.random() * ((areaDeJogo.clientWidth - 30) - min + 1)) + min;
    let y = Math.floor(Math.random() * ((areaDeJogo.clientHeight - 30) - min + 1)) + min;

    balao.setAttribute('style','left:'+x+'px; top:'+y+'px');
    balao.setAttribute('onclick','estourarBalao(this)');

    areaDeJogo.appendChild(balao)
}

function estourarBalao(objeto) {
    document.body.removeChild(objeto)

    pontos++;
    var score = document.getElementById('score')
    score.innerHTML = `Balões estourados: ${pontos}`

    document.body.appendChild(score)
}

function gerarAutomaticamenteBalao() {
    
    setInterval(criarBalao,20)
    
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
    criarAreaDeJogo();


    gerarAutomaticamenteBalao()
    
}

function criarAreaDeJogo() {
    let containerDoJogo = document.createElement('div');
    containerDoJogo.setAttribute('class','container-do-jogo');

    let areaDeJogo = document.createElement('div');
    areaDeJogo.setAttribute('class','area-deJogo');

    let ranking = document.createElement('div');
    ranking.setAttribute('class','ranking');


    let main = document.body.querySelector('main');
    main.setAttribute('style','height:100%;')

    main.appendChild(containerDoJogo);
    containerDoJogo.appendChild(areaDeJogo);
    containerDoJogo.appendChild(ranking);
}

function contar(objeto) {
    
    let showCount = document.body.querySelector('h1');

    let i = 3
    const cronometro = setInterval(() => {
        showCount.innerHTML = `${i}`;
        if( i === 0){
            clearInterval(cronometro)
        }
        i--
        
    }, 1000)
        
    
}



