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
            ]
        }
    }
}).mount('#app')