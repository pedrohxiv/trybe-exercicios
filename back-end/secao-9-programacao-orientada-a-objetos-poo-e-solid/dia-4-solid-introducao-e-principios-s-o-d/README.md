# :pencil: SOLID - Introdução e Princípios S, O e D

O objetivo dos exercícios desse dia foi aprender os princípios do SOLID! Esses princípios e boas práticas ditam como o código deve ser escrito e organizado para otimizar manutenção, legibilidade e testabilidade. Para isso deveria escrever funções e classes que tenham uma única responsabilidade no escopo da sua aplicação, escrever classes com funções que estão abertas para extensão e fechadas para modificação e inverter dependências para dar a quem chama o controle sobre como uma função faz o que precisa.

Os requisitos dos exercícios são:

### Preparando o ambiente

Antes de começarmos, vamos preparar o ambiente para a resolução dos exercícios 🚀.

É disponibilizada uma aplicação que controla um catálogo de plantas para um instituto de botânica. Esta API foi escrita em Typescript e está dividida em camadas conforme a arquitetura MSC (Model, Service e Controller). Transcreva para o Visual Studio Code os códigos abaixo:

> _./tsconfig.json_

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2019",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```

> _./package.json_

```
{
  "name": "solid-1-exercises",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "npx -y tsc",
    "prestart": "npm run build",
    "start": "node ./build/server.js",
    "dev": "tsnd ./src/server.ts",
    "lint": "eslint . --ext .ts"
  },
  "keywords": [
    "typescript",
    "solid",
    "refactor"
  ],
  "author": "Pessoa Estudante",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "4.17.14",
    "@types/node": "18.11.7",
    "@typescript-eslint/eslint-plugin": "5.41.0",
    "@typescript-eslint/parser": "5.41.0",
    "eslint": "8.26.0",
    "eslint-config-airbnb-typescript": "17.0.0",
    "eslint-config-trybe-backend": "2.1.0",
    "eslint-plugin-import": "2.26.0",
    "ts-node": "10.9.1",
    "ts-node-dev": "2.0.0",
    "typescript": "4.8.4"
  },
  "dependencies": {
    "express": "4.18.2"
  }
}
```

> _./.eslintrc.json_

```
{
  "root": true,
  "env": {
    "browser": false,
    "node": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:mocha/recommended",
    "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "no-console": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ]
  }
}
```

> _./src/server.ts_

```
import App from './App';

const PORT = 3001;

new App().start(PORT);
```

> _./src/App.ts_

```
import express, { Request, Response } from 'express';
import PlantRouter from './router/PlantRouter';
import errorMiddleware from './middlewares/errorMiddleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();

    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));
    this.app.use(errorMiddleware);
  }

  private routes(): void {
    this.app.use('/plants', PlantRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
```

> _./src/controllers/PlantController.ts_

```
import { Request, Response, NextFunction } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  public service: PlantService = new PlantService();

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
```

> _./src/exceptions/HttpException.ts_

```
class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default HttpException;
```

> _./src/middlewares/errorMiddleware.ts_

```
import { ErrorRequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
```

> _./src/models/database/opsInfo.json_

```
{
  "createdPlants": 2
}
```

> _./src/models/database/plantsData.json_

```
[
  {
    "id": 1,
    "breed": "Bromélia",
    "size": 102,
    "needsSun": false,
    "origin": "Argentina",
    "waterFrequency": 67.83
  },
  {
    "id": 2,
    "breed": "Orquídea",
    "size": 99,
    "needsSun": true,
    "origin": "Brazil",
    "waterFrequency": 84.23
  }
]
```

> _./src/router/PlantRouter.ts_

```
import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const plantController = new PlantController();

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));

export default plantRouter;
```

> _./src/services/PlantService.ts_

```
import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';

interface IPlant {
  id: number,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  waterFrequency: number,
}

type INewPlant = Omit<IPlant, 'id' | 'waterFrequency'>;

interface IOpsInfo {
  createdPlants: number
}

class PlantService {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(dataRaw);
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;

    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }

    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }

    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }

    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    return newPlant;
  }
}

export default PlantService;
```

O próximo passo é instalar as dependências executando o comando `npm install` no diretório raiz do projeto.

Caso deseje transformar o projeto em um repositório, execute também o comando `git init`. E adicione o arquivo `.gitignore` na raiz do repositório.

A aplicação pode ser iniciada com o comando `npm start`, ou `npm run dev`, caso prefira iniciar em modo de desenvolvimento.

### Iniciando

Primeiramente você deve analisar todo o código da aplicação para entender como ela funciona.

Em resumo a aplicação possui os seguintes _endpoints_:

- `GET /plants`: retorna todas as plantas;
- `POST /plants`: cria uma planta nova.

Utilizando um _client_ como o Insomnia, Postman ou Thunder Client verifique as informações obtidas em cada endpoint.

Agora é necessário adaptar o código de modo a transformá-lo em uma API respeitando os princípios do SOLID. Para isso, você deverá:

- Modificar o arquivo `./src/services/PlantService.ts`, aplicando os conceitos aprendidos;

- Implementar na camada **Model** pelo menos uma classe responsável por manipular as informações que estão armazenadas no diretório `./src/models/database/`. Essa classe deverá implementar a interface `IModel`:

> _./src/models/interfaces/IModel.ts_

```
  export interface IModelReader<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>
  }

  export interface IModelWriter<T> {
    create(arg: Omit<T, 'id'>): Promise<T>
    update(arg: T): Promise<T>
  }
  export interface IModelDelete {
    removeById(id: string): Promise<boolean>
  }

  export interface IModel<T> extends
    IModelReader<T>,
    IModelWriter<T>,
    IModelDelete {}
```

- Adicionar os _endpoints_:
    - `GET /plants/:id`: retorna uma planta específica;
    - `PUT /plants/:id`: atualiza as informações de uma específica;
    - `DELETE /plants/:id`: deleta uma planta específica;

- Realizar as validações necessárias para os novos _endpoints_;

- Crie um banco de dados para persistir os dados das plantas.
