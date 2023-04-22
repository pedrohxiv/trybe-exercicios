import Car from './Car';
import myFilter from './MyFilter';
import Pizza from './Pizza';
import PizzaCommon from './PizzaCommon';
import PizzaSugar from './PizzaSugar';
import PizzaVegetarian from './PizzaVegetarian';

console.log('---------------------------------------------------');
console.log('Exercicios 1 e 2\n');

const gol = new Car('Volkswagen', 'prata', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedDown();
gol.stop();
gol.speedUp();

console.log('\n---------------------------------------------------');
console.log('Exercicio 3\n');

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(calabresa);
console.log(marguerita);
console.log(nutella);

console.log('\n---------------------------------------------------');
console.log('Exercicio 4\n');

const calabresa2: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6,
};

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 8,
};

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 6,
};

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 8,
};

const cogumelos: PizzaVegetarian = {
  flavor: 'Cogumelos',
  slices: 8,
};

const marshmallow: PizzaSugar = {
  flavor: 'Marshmallow',
  slices: 4,
};

console.log(calabresa2);
console.log(frango);
console.log(pepperoni);
console.log(palmito);
console.log(cogumelos);
console.log(marshmallow);

console.log('\n---------------------------------------------------');
console.log('Exercicio 5\n');

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, index, array) => item > 6));
console.log(
  myFilter(
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    (item, index, array) => item !== 'a' && item !== 'c' && item !== 'g' && item !== 'h',
  ),
);
