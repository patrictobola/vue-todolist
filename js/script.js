console.log('JS OK', Vue)

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        tasks: [
          {
            name: 'Fare la spesa',
            done: true,
          },
          {
            name: 'Tagliando alla macchina',
            done: false,
          },
          {
            name: 'Pagare le tasse :(',
            done: false,
          },
          {
            name: 'Bere 2 litri di acqua',
            done: false,
          },
          {
            name: 'Prendere appuntamento con ciccio o pippo',
            done: false,
          },
          {
            name: 'Pulire casa',
            done: false,
          },
        ]
      }
    }
  })
  app.mount("#app");
