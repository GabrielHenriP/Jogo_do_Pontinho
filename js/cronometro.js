function contar() {
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