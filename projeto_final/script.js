class Musica {
    constructor(nome, autor, ano, genero, album) {
        this.nome = nome;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
        this.album = album;
    }
}

var app = new Vue({
    el: '#app',
    data: {
        nome: '',
        autor: '',
        ano: '',
        genero: '',
        album: '',
        listaMusicas:[] 
    },
    methods: {
        verificarCampos: function() {
            return (this.nome != '' && this.autor != '' && this.ano != '' && this.genero != '' && this.album != '');
        },
        cadastrar: function(){
            let novaMusica = new Musica(this.nome, this.autor, this.ano, this.genero, this.album);
            this.listaMusicas.push(novaMusica);
            this.nome = '';
            this.autor = '';
            this.ano = '';
            this.genero = '';
            this.album = '';
        },
    }
});