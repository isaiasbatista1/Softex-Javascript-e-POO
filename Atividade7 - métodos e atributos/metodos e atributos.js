/*Escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com
pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar
, demonstre em Javascript e exemplifique as suas características e ações.
*/


//objetos materiais
const livro = {
    titulo:"Somos todos teólogos",
    paginas: 488,
    autor:"R.C.Sproul",
    anopublicacao:2017,

    exibirInformacoes: function() {
        console.log(`Título do livro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Ano de Publicação: ${this.anopublicacao}`);
    },

    verificarRecente: function() {
        const anoAtual = new Date().getFullYear();
        return (anoAtual - this.anoPublicacao) <= 5;
    },

    contarPalavrasPorPagina: function() {
        const palavrasTotais = 250 * this.paginas;
        return palavrasTotais;
    },
}

livro.titulo = "Somos todos Teólogos"; 

livro.exibirInformacoes();
console.log(`O livro é recente? ${livro.verificarRecente() ? 'Sim' : 'Não'}`);
console.log(`Número total de palavras no livro: ${livro.contarPalavrasPorPagina()}\n`);


const teclado = {
    material:"plástico",
    marca:"Redragon",
    cor:"preto",

    exibirInformacoes:function(){
        console.log(`Material do teclado: ${this.material}, Marca: ${this.marca}, Cor: ${this.cor}`)
    },

    alterarCor: function(novaCor){
        this.cor = novaCor;
        console.log(`Cor do teclado alterada para ${novaCor}`)

    },

    verificarMaterial: function(){
        return this.material.toLowerCase () === "plástico"
    }
};

teclado.exibirInformacoes()
teclado.marca = "Logitech"
console.log(`O material do teclado é plástico? ${teclado.verificarMaterial()? 'Sim' : 'Não'}\n`)


//Objetos abstratos
const ideia =  {
    descricao: "Uma nova forma de energia renovável",
    categoria:"Tecnologia",
    grauInovacao: "Alto",

    setDescricao: function(novaDescricao){
        this.descricao = novaDescricao
    },

    setCategoria: function(novaCategoria){
        this.categoria = novaCategoria
    },

    setgrauInovacao: function(novoGrau){
        this.grauInovacao = novoGrau
    }
};

ideia.setDescricao('Novas formas de captação de energia solar')
ideia.setCategoria('Tecnologia')
ideia.setgrauInovacao(5)

console.log(`Descricao da ideia: ${ideia.descricao}`)
console.log(`Categoria: ${ideia.categoria}`)
console.log(`Grau de Inovação: ${ideia.grauInovacao}\n`)


const apresentacao = {
    tema: 'Pecadores nas mãos de um Deus irado',
    apresentador:'Jonathan Edwards',
    local:'Yale College',

    setTema: function(novoTema){
        this.tema = novoTema
    },

    setApresentador: function(novoApresentador){
        this.apresentador = novoApresentador
    },

    setLocal: function(novoLocal){
        this.local = novoLocal
    }
};

apresentacao.setTema('Pecadores nas mãos de um Deus irado')
apresentacao.setApresentador('Jonathan Edwards')
apresentacao.setLocal('Yale College')

console.log(`Tema da apresentação: ${apresentacao.tema}`)
console.log(`Apresentador: ${apresentacao.apresentador}`)
console.log(`Local: ${apresentacao.local}`)