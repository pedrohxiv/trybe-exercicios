const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const { driverModel } = require('../../../src/models');

describe('Driver Model', function () {
  describe('Lista todas as pessoas motoristas', function () {
    before(async function () {
      const execute = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        },
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async function () {
      connection.execute.restore();
    });

    const expected = [
      {
        id: 1,
        name: 'Liana Cisneiros',
      },
      {
        id: 2,
        name: 'Fábio Frazão',
      },
    ];

    it('Verifica se a função retorna uma estrutura de array', async function () {
      const response = await driverModel.getAll();

      expect(response).to.be.a('array');
    });

    it('Verifica se a função retorna a lista em um formato especifico', async function () {
      const response = await driverModel.getAll();

      expect(response).to.deep.equal(expected);
    });
  });

  describe('Encontra uma pessoa motorista pelo id', function () {
    before(async function () {
      const execute = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        },
      ];

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const payload = 1;

    const expected = {
      id: 1,
      name: 'Liana Cisneiros',
    };

    it('Verifica se a função retorna um objeto de formato especifico', async function () {
      const response = await driverModel.getById(payload);

      expect(response).to.deep.equal(expected);
    });
  });

  describe('Cadastra uma nova pessoa motorista', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const payload = {
      name: 'Luara Silva',
    };

    const expected = 1;

    it('Verifica se a função retorna o id da pessoa motorista cadastrada', async function () {
      const response = await driverModel.create(payload);

      expect(response).to.equal(expected);
    });
  });
});
