console.log('JS OK', Vue)

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Fare la spesa',
            done: false,
          },
          {
            id: 2,
            name: 'Tagliando alla macchina',
            done: false,
          },
          {
            id: 3,
            name: 'Pagare le tasse :(',
            done: true,
          },
          {
            id: 4,
            name: 'Bere 2 litri di acqua',
            done: false,
          },
          {
            id: 5,
            name: 'Prendere appuntamento con ciccio o pippo',
            done: false,
          },
          {
            id: 6,
            name: 'Pulire casa',
            done: false,
          },
        ],
        newTask: '',
        searchValue: '',
      }
    },

    computed: {
      // Controllo qual è l'id più alto e ne assegno uno più alto in data
      newId() {
          let actualId = 0;
          this.tasks.forEach(task => {
            if (task.id > actualId) actualId = task.id;
          });
          return ++actualId;
      },
      filteredTasks() {
        const searchedWord = this.searchValue.toLowerCase();
        return this.tasks.filter((task) => {
          return task.name.toLowerCase().includes(searchedWord);
        })
      },

    },

    methods: {
      // Metodo per cancellare dal mio array di oggetti, un oggetto in base all'id 
      removeTask(target){
        this.tasks = this.tasks.filter(task => target !== task.id)  
      },
      // Aggiunge un nuovo task nella lista 
      addTask(){
        this.tasks.push({
            id: this.newId,
            name: this.newTask,
            done: false
          })
        this.newTask = ''
      },

      
    },
  })
  app.mount("#app");
