# :pencil: SOLID - Princípios L e I

O objetivo dos exercícios desse dia foi dar continuidade aos aprendizados sobre SOLID, onde vi os dois princípios restantes: o **L** e o **I**. Para isso deveria substituir objetos em um programa por instâncias de seus subtipos, sem alterar a funcionalidade do programa, compreender que muitas interfaces específicas são melhores do que uma para todos os propósitos e aplicar todos os princípios SOLID.

Os requisitos dos exercícios são:

> _O código a seguir será usado nos exercícios 1, 2 e 3._

O programa retorna informações relacionadas ao cep de uma pessoa e tem duas funcionalidades:

- Consultar um endereço a partir de um cep e um número de um logradouro
- Consultar um cep a partir de um endereço e um número de um logradouro

```
// ./FooCepAPI.ts
class FooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;
```

```
// ./CepService.ts
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
```

```
// ./index.ts
import CepService from './CepService';

async function main() {
  const cepSvc = new CepService();

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
```

```
npx ts-node index.ts
```

**Exercício 1**: - Aplique a técnica de injeção de dependência para que a classe `CepService` diminua seu nível de acoplamento com a dependência `FooCepAPI`.

> _Dica: [Um Guia sobre Injeção e Inversão de Dependências em Node.js e TypeScript](https://dev.to/oieduardorabelo/um-guia-sobre-injecao-e-inversao-de-dependencias-em-node-js-e-typescript-1bod)_

**Exercício 2**: - A classe `CepService` ainda depende de uma implemenção concreta para as chamadas da Api e CEP. Aplique o princípio da `Inversão de dependência` para fazer com que a classe `CepService` fique completamente desacoplada.

**Exercício 3**: - Implemente uma classe `MockCepApi` usada para realização de testes unitários. _Obs: Você não precisa realizar os testes._

> _o código a seguir será usado nos exercícios 4, 5 e 6_

```
// ./interfaces.ts
export interface IVehicle {
  drive(): void;
  fly(): void;
}
```

```
// ./FuturisticCar.ts
import { IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
```

O objetivo do programa é modelar o comportamento de veículos. Inicialmente, supõe-se que há apenas um tipo de veículo que **voa**(fly) e _move_(drive) definido por `IVehicle` e implementado em `FuturisticCar`.

**Exercício 4**: - Implemente um novo tipo de veículo com a classe `Car` a partir da interface existente. Esse veículo deve somente ser capaz se mover.

**Exercício 5**: - Implemente um novo tipo de veículo com a classe `AirPlane` a partir da interface existente. Esse veículo deve somente ser capaz de voar.

**Exercício 6**: - Aplique o `Princípio da Segregação de Interfaces` com o objetivo de separar a implementação de cada tipo de veículo.
