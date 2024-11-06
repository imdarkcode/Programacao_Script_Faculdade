class Usuario {
    constructor(nome, telefone, email, senha) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }
}

var app = new Vue({
    el: '#app',
    data: {
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        listaUsuarios:[] 
    },
    methods: {
        verificarCampos: function() {
            return (this.nome != '' && this.telefone != '' && this.email != '' && this.senha != '');
        },
        cadastrar: function(){
            let novoUsuario = new Usuario(this.nome, this.telefone, this.email, this.senha);
            this.listaUsuarios.push(novoUsuario);
            this.nome = '';
            this.telefone = '';
            this.email = '';
            this.senha = '';
        },
    }
});