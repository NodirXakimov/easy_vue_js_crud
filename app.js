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
                name: 'Javohir',
                age: 24,
                group: '120'
            },
            {
                id: 2,
                name: 'Abdulaziz',
                age: 24,
                group: '310'
            },

        ],
        newStudent: {
            id: null,
            name: '',
            age: null,
            group: null
        },
        isEdit: false,
        error: false
    },
    methods: {
        createStudent(){
            if(!this.validateInput()){
                this.error = true;
                setTimeout(() => this.error = false, 1200);
                return;
            }
            this.students.push({
                id: this.students.length,
                name: this.newStudent.name,
                age: this.newStudent.age,
                group: this.newStudent.group
            });
            this.setToInput();
        },
        removeStudent(id){
            this.students.forEach((student, index) => {
                if(student.id == id){
                    this.students.splice(index, 1);
                }
            });
        },
        editStudent(id){
            this.isEdit = true;
            this.setToInput(id);
        },
        setToInput(id = null){
            if(id === null){
                this.newStudent.id = null;
                this.newStudent.name = null;
                this.newStudent.age = null;
                this.newStudent.group = null;
            } else {
                this.students.forEach((student, index) => {
                    if(student.id === id){
                        this.newStudent.id = student.id;
                        this.newStudent.name = student.name;
                        this.newStudent.age = student.age;
                        this.newStudent.group = student.group;
                    }
                })
            }
        },
        saveStudent(){
            if(!this.validateInput()){
                this.error = true;
                setTimeout(() => this.error = false, 1200);
                return;
            }
            this.students.forEach(student =>{
                if(student.id === this.newStudent.id){
                    student.name = this.newStudent.name;
                    student.age = this.newStudent.age;
                    student.group = this.newStudent.group;
                }
            });
            this.setToInput();
            this.isEdit = false;
        },
        validateInput(){
            for (const key in this.newStudent) {
                if(key === 'id') 
                    continue;
                if (!this.newStudent[key]) {
                    return false;
                }
            }
            return true;
        }


    },
})