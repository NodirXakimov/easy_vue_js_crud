var app = new Vue({
    el: '#app',
    data: {
        students: [
            {
                id: 0,
                name: 'Nodir',
                age: 24,
                group: 'MIIT-10'
            },
            {
                id: 1,
                name: 'Sanjar',
                age: 24,
                group: 'MIIT-10'
            }
        ],
        newStudent: {
            id: null,
            name: '',
            age: null,
            group: null
        }
    },
    methods: {
        submit(){
            
            this.students.push({
                id: this.students.length,
                name: this.newStudent.name,
                age: this.newStudent.age,
                group: this.newStudent.group
            });
            this.newStudent.id = null;
            this.newStudent.name = null;
            this.newStudent.age = null;
            this.newStudent.group = null;
        }
    },
})