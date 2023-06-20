console.log('vue ok',Vue)
const app= Vue.createApp({
    name:'ToDoList',
    data(){
        return{
            newTask:'',
            tasks:[
                {
                    id:1,
                    done:false,
                    text:'Fare la spesa',
                },
                {
                    id:2,
                    done:false,
                    text:'Stendere i panni',
                },
                {
                    id:3,
                    done:false,
                    text:'Pulire la cucina',
                },
                {
                    id:4,
                    done:false,
                    text:'Lavare la macchina',
                },
            ]
        }
    },
    methods: {
        deleteTask(targetId){
            this.task =this.tasks.filter((task) => targetId !== task.id)
        },
        addTask(){
            if(!this.newTask.length) return;
            let highestId= 0;
            this.tasks.forEach( (task)=> {
                if (task.id>highestId) highestId=task.id
            });
            const nextId=++highestId
            const task = {id:nextId, done:false, text:this.newTask};
            this.tasks.push(task);
            this.newTask='';
        },
        toggleTask(targetId){
           this.tasks.forEach((task)=>{
            if(task.id===targetId)task.done=!task.done
            console.log(task)
           })
        }
    }
})
app.mount('#root'); 