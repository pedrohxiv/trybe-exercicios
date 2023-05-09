const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/connection');
const { carModel } = require('../../../src/models');

describe('Car Model', function () {
  describe('Cadastra um novo carro', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const payload = {
      model: 'Gol',
      color: 'Vermelho',
      licensePlate: 'NPE-1729',
    };

    const expected = 1;

    it('Verifica se a função retorna o id do carro cadastrado', async function () {
      const response = await carModel.create(payload);

      expect(response).to.equal(expected);
    });
  });

  describe('Encontra um carro pelo id', function () {
    before(async function () {
      const execute = [
        {
          id: 2,
          model: 'Volkswagen Gol',
          color: 'Vermelho',
          licensePlate: 'DZG-4376',
        },
      ];

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const payload = 2;

    const expected = {
      id: 2,
      model: 'Volkswagen Gol',
      color: 'Vermelho',
      licensePlate: 'DZG-4376',
    };

    it('Verifica se a função retorna um objeto de formato especifico', async function () {
      const response = await carModel.getById(payload);

      expect(response).to.deep.equal(expected);
    });
  });
});
