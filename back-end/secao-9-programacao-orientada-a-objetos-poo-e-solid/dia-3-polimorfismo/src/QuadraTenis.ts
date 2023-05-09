import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import normas from './normas/normasDeUso';

export default class QuadraTenis extends Quadra {
  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    return {
      protocolo: (Math.random() + 1).toString(30).substring(3),
      data: horaReserva,
      regras: normas.tenis as unknown as ITenis,
    };
  }
}
