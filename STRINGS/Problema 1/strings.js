const btn = document.getElementById('btn');
let nomeFormatado = document.getElementById('nomeFormatado');  
//console.log(nomeFormatado);

btn.addEventListener('click', function (e) {
    let nome = document.getElementById('nome').value;
    const pos = nome.lastIndexOf(' ');
    if (pos <= 0) {
        nomeFormatado.value = nome; 
    } else {
        console.log(pos);
        const primeiro = nome.slice(0, pos);
        const restante = nome.substring(pos + 1);
        const formatado = restante + ', ' + primeiro;
        nomeFormatado.value = formatado;  
    }    
    e.preventDefault();  
})
