import Pizza from './Pizza';
import { Sugar } from './PizzaTypes';

export default interface PizzaSugar extends Pizza {
  flavor: Sugar;
}
