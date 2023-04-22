import Pizza from './Pizza';
import { Common } from './PizzaTypes';

export default interface PizzaCommon extends Pizza {
  flavor: Common;
}
