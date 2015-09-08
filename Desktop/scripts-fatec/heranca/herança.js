function Animal(nome, som) {
    this.nome = nome || 'Sem nome';
		this.som = som || 'sem som';
}

Animal.prototype.barulho = function () {
	return 'xixixi';

}

function Rato(nome, som){
	Animal.call(this, nome, som);

}

function Passarinho(nome, som){
	Animal.call(this, nome, som);

}

Rato.prototype = new Animal();
Rato.prototype.constructor = Rato;

Rato.prototype.constructor = function(){
	return 'quick quick quick';

};

Passarinho.prototype = new Animal();
Passarinho.prototype.constructor = Passarinho;

Passarinho.prototype.constructor = function(){
	return 'piu piu piu';

};

function Manada() {
    this.animais = [];
    this.adicionarAnimal = function (animal) {
        this.animais.push(animal);
    };
}

function ManadaVirgula() {
    this.exibirAnimais = function () {
        var animaisArray = "";
        for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 == this.animais.length) {
                animaisArray += this.animais[i];
            
			} else {
                animaisArray += this.animais[i] + ", ";
            
			}
        }
        console.log(animaisArray);
    };
}

function ManadaSustenido() {
    this.exibirAnimais = function () {
        var animaisArray = "";
         for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 == this.animais.length) {
				animaisArray += this.animais[i];		
            } else {
                animaisArray += this.animais[i] + "# ";
            }
        }
        console.log(animaisArray);
    };
}

ManadaVirgula.prototype = new Manada();
ManadaSustenido.prototype = new Manada();

var animal = new Animal();
var rato = new Rato("Harry", "fiu");
var passarinho = new Passarinho("calopsita", "qik");

console.log(animal.barulho());

console.log(rato.barulho());

console.log(passarinho.barulho());

var manadaVirgula = new ManadaVirgula();

manadaVirgula.adicionarAnimal(rato.barulho);

manadaVirgula.adicionarAnimal(passarinho.barulho);

manadaVirgula.exibirAnimais();

var manadaSustenido = new ManadaSustenido();

manadaSustenido.adicionarAnimal(rato.barulho);

manadaSustenido.adicionarAnimal(passarinho.barulho);

manadaSustenido.exibirAnimais();