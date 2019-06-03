// EventEmitter

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("TUT", (num1, num2) =>{
    console.log(num1 + num2);
});

eventEmitter.emit("TUT", 1, 6);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let kacper = new Person("Kacper");

kacper.on('name', ()=>{
    console.log("Hi, I'm " + kacper.name);
});

kacper.emit('name');
