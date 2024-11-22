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
        listaUsuarios:[],
        hora: '00:00:00',
        posicao: -1
    },
    methods: {
        verificarCampos: function() {
            return (this.nome != '' && this.telefone != '' && this.email != '' && this.senha != '');
        },
        salvar: function(){
            let novoUsuario = new Usuario(this.nome, this.telefone, this.email, this.senha);
            if (this.posicao == -1) {
                this.listaUsuarios.push(novoUsuario);
            } else {
                Vue.set(this.listaUsuarios, this.posicao, novoUsuario);
            }
            this.nome = '';
            this.telefone = '';
            this.email = '';
            this.senha = '';
            this.posicao = -1;
        },
        carregarHora: function() {
            axios.get('http://date.jsontest.com/').then (res => (this.hora = res.data.time));
        },
        alterar: function(index) {
            this.nome = this.listaUsuarios[index].nome;
            this.telefone = this.listaUsuarios[index].telefone;
            this.email = this.listaUsuarios[index].email;
            this.senha = this.listaUsuarios[index].senha;
            this.posicao = index;
        },
        excluir: function(index) {
            if (confirm('Deseja excluir?')) {
                this.listaUsuarios.splice(index, 1);
            }
        }
    }
});