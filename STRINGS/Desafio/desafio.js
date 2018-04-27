const btn = document.getElementById('btn');
const paragrafos = document.getElementsByTagName('p');
const solucao = document.getElementById('solucao');
let texto = '';

for (const key in paragrafos) {
    texto += paragrafos[key].textContent;
}

btn.addEventListener('click', function (e) {
    const novoTexto = texto.slice(0, 600);
    solucao.innerHTML = novoTexto + ' ...';
    e.preventDefault();

})