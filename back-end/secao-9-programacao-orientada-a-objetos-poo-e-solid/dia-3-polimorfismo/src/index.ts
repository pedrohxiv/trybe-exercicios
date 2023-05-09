import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const clube = new Clube();

const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const reservarQuadraFutebol = clube
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(new Date('2023-05-09'));

console.log(reservarQuadraFutebol);
