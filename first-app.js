//console.log('Hello World')
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(2,5));

const student={
    name:'Dhruv',
    age:21,
    intro(){
        console.log('Hi I am '+this.name)
    }
}
student.intro()
