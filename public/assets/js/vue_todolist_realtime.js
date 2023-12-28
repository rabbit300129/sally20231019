Vue.creatApp({
    data() {
        return {
            isAuth: false,
        }
    },
    methods: {},
    mouted() {
        console.log('todo app is mounted.')
    }
}).mount('#todo-app')