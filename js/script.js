const {createApp} = Vue;

createApp ({
    data () {
        return {
            todolist: [
                {
                    text: 'Andare a fare la spesa',
                    done: false,
                },{
                    text: 'Passeggiata con il cane',
                    done: true,
                },{
                    text: 'Comprare il giornale',
                    done: true,
                },{
                    text: 'Preparare la cena',
                    done: false
                },{
                    text: 'Finire l\'esercizio del giorno',
                    done: true,
                },{
                    text: 'Portare fuori la spazzatura',
                    done: false,
                }
            ],
            id_counter: 0,
        }
    },
    methods: {
        trush_click(index) {
            this.id_counter = index;
            console.log('trush_clicked', index);
            this.todolist.splice(index, 1);
        }
    }
}).mount('#app')