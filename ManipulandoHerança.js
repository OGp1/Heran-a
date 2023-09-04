class Animal {
    constructor(nome, idade, genero) {
      this.nome = nome;
      this.idade = idade;
      this.genero = genero;
    }
    Comer() {
      console.log(`${this.nome} já comeu.`);
    }
    Soar() {
      console.log("O animal fez um som");
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, genero, raca) {
      super(nome, idade , genero);
      this.raca = raca;
    }
  
    Latir() {
      console.log(`${this.nome} latiu: Au Au!`);
    }
  
    Brincar() {
      console.log(`${this.nome} está Brincando.`);
    }
  }
  
//   criei dois animais para testar aqui
  let animalGenerico = new Animal("Animal", 3);
  let cachorro = new Cachorro("Doguinho", 2, "Pastor Alemão");
  

  animalGenerico.Comer();
  animalGenerico.Soar();
  cachorro.Latir();
  cachorro.Comer();
  cachorro.Brincar();
  