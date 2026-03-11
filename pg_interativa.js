function atualizarRelogio() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    
    function atualizar() {
        var data = new Date();
        var hora = data.getHours();
        var minu = data.getMinutes().toString().padStart(2, '0');
        var sec = data.getSeconds().toString().padStart(2, '0');

        // Atualiza o texto com o horário
        msg.innerHTML = `Agora são ${hora}:${minu}:${sec} horas.`;
        
        //hora = 13
        // Atualiza a imagem e o fundo baseado na hora
        if(hora >= 0 && hora < 12){
            img.src = '1.png'; 
            document.body.style.background = '#e2cd9f';
        } else if (hora >= 12 && hora < 19){
            img.src = '2.png';
            document.body.style.background = '#df8c49';
        } else {
            img.src = '3.png';
            document.body.style.background = '#130642';
        }
    }
    
    // Chama a função imediatamente para exibir o horário
    atualizar();
    
    // Atualiza a cada segundo (1000ms)
    setInterval(atualizar, 1000);
}

    // Chama a função quando a página carrega
    window.onload = atualizarRelogio;
