import Pizza from './Pizza';
import { Vegetarian } from './PizzaTypes';

export default interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian;
}
