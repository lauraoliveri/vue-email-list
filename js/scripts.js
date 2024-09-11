
const { createApp } = Vue;

createApp({
    data() {
        return {
            Emails: []
        }
    },
    created() {

        // genero le 10 email random quando viene creato vue
        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            .then((response)=> {
                this.email = response.data.response;
                this.Emails.push(response.data.response);
            });
        }
    }
    
}).mount('#app')

