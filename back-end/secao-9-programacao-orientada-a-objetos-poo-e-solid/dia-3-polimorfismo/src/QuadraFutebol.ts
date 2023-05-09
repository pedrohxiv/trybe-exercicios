import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import normas from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra {
  public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    return {
      protocolo: (Math.random() + 1).toString(30).substring(3),
      data: horaReserva,
      regras: normas.futebol as unknown as IFutebol,
    };
  }
}
