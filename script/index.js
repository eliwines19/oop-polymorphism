class Animal {
    speak() {
        console.log('** makes animal noises **')
    }
}

class Bird extends Animal {
    speak() {
        console.log('tweet tweet')
    }
}

class Dog extends Animal {
    speak() {
        console.log('woof woof')
    }
}

var animal = new Animal();
var dog = new Dog();
var bird = new Bird();

animal.speak();
dog.speak();
bird.speak();