class Greet {
	// Private fields
	#name = 'World';
	
  get name() {
    return this.#name;
	}
	
  set name(name) {
    this.#name = name;
	}
	
  sayHello() {
    console.log(`Hello, ${this.#name}`);
  }
}

const g = new Greet();
g.sayHello();