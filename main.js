const areaInicial = document.querySelector('.pagina_inicial');
const areaPergunta = document.querySelector('.area__pergunta');
const areaCarregamento = document.querySelector('.mensagem__carregamento');
const areaFinal = document.querySelector('.mensagem__final');

const BTiniciar = document.getElementById('botao__iniciar');
const BTreiniciar = document.getElementById('botao__reiniciar');
const BTenviar = document.getElementById('bt_enviar');
const BTpergunta = document.querySelector('.pergunta');
let nome = undefined;

BTiniciar.addEventListener('click', () =>{
    areaPergunta.classList.toggle('hidden');
});

BTpergunta.addEventListener('submit', function(e) {
    nome = document.getElementById('campo__nome').value;
    e.preventDefault();

    areaInicial.classList.add('hidden');
    areaPergunta.classList.add('hidden');
    criaIntervalo(); 
});



function criaIntervalo(){
    const mensagens = ['Testando', 'Bucando na base de dados','Preparando formulario'];
    let contador = 0;

    //criarMensagemCarregamento(mensagens[0]);

    var intervalo = setInterval(() =>{

        if(contador >= 3){
            mensagemFinal();
            areaCarregamento.innerHTML = ''
            clearInterval(intervalo);
        }else{
            criarMensagemCarregamento(mensagens[contador]);
            contador++;
        }

    }, 1000);

}

function criarMensagemCarregamento(mensagem){
    areaCarregamento.innerHTML = `            
                <h2 class="mensagem_carregamento__texto ">${mensagem}</h2>
                <img src="imagens/grey-9026_256.gif" alt="gif carregamento" class="gif_carregamento">
                `
}

function mensagemFinal(){

    const brincadeirasTexto = ['vc é gay pra krlh', 'você tem que parar de fumar', 'esses é o seu IP:5896-3021-7469-1853', 'comi tua mãe respeita o padastro','supera a ex plmd', 'ta me devendo um lanche']
    const brincadeirasImagens = ["lgbt-flag.gif","cigas.png","laugh.gif","dança.gif","supera a ex.gif", "laugh.gif" ]
    
    const numeroAleatorio = Math.floor(Math.random() * brincadeirasTexto.length);
    
    const imagem = brincadeirasImagens[numeroAleatorio];
    const texto = brincadeirasTexto[numeroAleatorio];

    areaFinal.classList.remove('hidden');
    areaFinal.innerHTML = `
    <h2 class="mensagem__final__texto">${nome}, ${texto} </h2>
    <div class="imagens">
        <img class="mensagem__final__imagem" src="imagens/${imagem}">
        <img class="mensagem__final__imagem" src="imagens/${imagem}">
        <img class="mensagem__final__imagem" src="imagens/${imagem}">
    </div>
    `
    BTreiniciar.classList.remove('hidden');
}

BTreiniciar.addEventListener('click', () =>{
    areaInicial.classList.remove('hidden');
    areaFinal.classList.add('hidden');
    BTreiniciar.classList.add('hidden'); 
})