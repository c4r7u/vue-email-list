Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            emailsList: [],
        },
        methods: {
        },


// stampo per dieci volte axios.get per avere 10 email//
        created: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response)
                this.emailsList.push(response.data.response);
            });
        }
    }
);