class Dog {
    constructor(name, restlv) {
        this._name = name;
        this._restlv = restlv;
        this._happiness = 10;
    }
    get name() {
        console.log(`Meet ${this._name}, he is the best dog ever!`)
        return this._name;
    }
    play(happy) {
        this._happiness += happy;
        console.log(`${this._name} is super happy!`);
    }
    sleep() {
        this._restlv += 3;
        console.log(`${this._name} has a rest level of ${this._restlv}.`);
    }
}


var puppy = new Dog('Boomer', 5);

console.log(puppy.name);
puppy.sleep();
puppy.play(4);

class Breed extends Dog {
    constructor(name, restlv, size) {
    super(name, restlv);
    this._size = size;
    }
   
    get size() {
        console.log(`${this._name} is a ${this._size} sized dog.`);
        return this._size;
    }
    sleep() {
        this._restlv += 3;
        console.log(`${this._name} has a rest level of ${this._restlv}.`);
    }

}

var type1 = new Breed('Molly', 7, 'medium');
type1.size;
type1.sleep();

