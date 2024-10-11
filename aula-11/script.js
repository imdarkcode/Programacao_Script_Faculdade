var app = new Vue({
    el: "#app",
    data: {
        tarefa: "",
        listaTarefas: []
    },
    methods: {
        adicionarTarefa: function() {
            this.listaTarefas.push(this.tarefa);
            this.tarefa = "";
        },
        limparLista: function() {
            this.listaTarefas = [];
        }
    }
});