const sinon = require('sinon');
const { expect } = require('chai');

const { carModel } = require('../../../src/models');
const { carService } = require('../../../src/services');

const { createdCar } = require('./mocks/car.service.mock');

describe('Car Service', function () {
  describe('Cadastra um novo carro com erros semânticos', function () {
    it('Verifica se a função retorna um erro ao receber um modelo inválido', async function () {
      const response = await carService.createCar('Ka', 'Azul', 'ABC1D2E');

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"model" length must be at least 3 characters long',
      );
    });
    it('Verifica se a função retorna um erro ao receber uma cor inválida', async function () {
      const response = await carService.createCar('Ford Ka', 'A', 'ABC1D2E');

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"color" length must be at least 2 characters long',
      );
    });
    it('Verifica se a função retorna um erro ao receber uma placa inválida', async function () {
      const response = await carService.createCar('Ford Ka', 'Azul', 'ABC1D2E2');

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"licensePlate" length must be 7 characters long',
      );
    });
  });

  describe('Cadastra um novo carro com sucesso', function () {
    beforeEach(async function () {
      sinon.stub(carModel, 'create').resolves(createdCar);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função não retorna erros', async function () {
      const response = await carService.createCar('Ford Ka', 'Azul', 'ABC1D2E');

      expect(response.type).to.equal(null);
    });
    it('Verifica se a função retorna o carro cadastrado', async function () {
      const response = await carService.createCar('Ford Ka', 'Azul', 'ABC1D2E');

      expect(response.message).to.equal(createdCar);
    });
  });
});
