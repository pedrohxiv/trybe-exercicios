const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/connection');
const { driverCarModel } = require('../../../src/models');

describe('Driver_Car Model', function () {
  describe('Cadastra o relacionamento das pessoas motoristas com os carros', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const payload = {
      driverId: 3,
      carId: 1,
    };

    const expected = 1;

    it('Verifica se a função retorna o id do relacionamento', async function () {
      const response = await driverCarModel.create(payload);

      expect(response).to.equal(expected);
    });
  });
});
