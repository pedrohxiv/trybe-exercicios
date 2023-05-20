const sinon = require('sinon');
const { expect } = require('chai');

const {
  travelModel,
  carModel,
  driverModel,
  driverCarModel,
} = require('../../../src/models');
const { driverService } = require('../../../src/services');

const { listTravelsWithoutDriver } = require('./mocks/passenger.service.mock');
const {
  driverList,
  createdDriverWithoutCars,
  createdDriverWithCars,
  createdDriver,
} = require('./mocks/driver.service.mock');
const { carList } = require('./mocks/car.service.mock');

describe('Driver Service', function () {
  describe('Lista todas as viagens em aguardo do motorista', function () {
    beforeEach(async function () {
      sinon.stub(travelModel, 'findByTravelStatusId').resolves(listTravelsWithoutDriver);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna a lista em um formato especifico', async function () {
      const response = await driverService.getWaitingDriverTravels();

      expect(response.type).to.equal(null);
      expect(response.message).to.be.deep.equal(listTravelsWithoutDriver);
    });
  });

  describe('Lista todas as pessoas motoristas', function () {
    beforeEach(async function () {
      sinon.stub(travelModel, 'findAll').resolves(driverList);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a lista de motoristas retornada é um array', async function () {
      const response = await driverService.getDrivers();

      expect(response.message instanceof Array).to.equal(true);
    });
    it('Verifica se a função retorna a lista de motoristas com sucesso', async function () {
      const response = await driverService.getDrivers();

      expect(response.message).to.deep.equal(driverList);
    });
  });

  describe('Cadastra uma nova pessoa motorista com erros semânticos', function () {
    it('Verifica se a função retorna um erro ao receber um nome inválido', async function () {
      const response = await driverService.createDriver('P', [1, 2]);

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal(
        '"name" length must be at least 3 characters long',
      );
    });
    it('Verifica se a função retorna um erro ao receber uma lista inválida', async function () {
      const response = await driverService.createDriver('Pedro', '1');

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal('"carIds" must be an array');
    });
  });

  describe('Cadastra uma nova pessoa motorista com erros de id', function () {
    beforeEach(async function () {
      sinon.stub(carModel, 'getById').resolves();
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o erro "CAR_NOT_FOUND"', async function () {
      const response = await driverService.createDriver('Pedro', [999]);

      expect(response.type).to.equal('CAR_NOT_FOUND');
    });
    it('Verifica se a função retorna a mensagem "Some car is not found"', async function () {
      const response = await driverService.createDriver('Pedro', [999]);

      expect(response.message).to.equal('Some car is not found');
    });
  });

  describe('Cadastra uma nova pessoa motorista com sucesso sem carros', function () {
    beforeEach(async function () {
      sinon.stub(driverModel, 'create').resolves(1);
      sinon.stub(driverModel, 'getById').resolves(createdDriver);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna a pessoa motorista cadastrada', async function () {
      const response = await driverService.createDriver('Pedro');

      expect(response.message).to.deep.equal(createdDriverWithoutCars);
    });
    it('Verifica se a função não retorna erro', async function () {
      const response = await driverService.createDriver('Pedro');

      expect(response.type).to.equal(null);
    });
  });

  describe('Cadastra uma nova pessoa motorista com sucesso com carros', function () {
    beforeEach(async function () {
      sinon.stub(driverModel, 'create').resolves(1);
      sinon.stub(driverModel, 'getById').resolves(createdDriver);
      sinon.stub(driverCarModel, 'create').resolves();
      sinon
        .stub(carModel, 'getById')
        .onCall(0)
        .resolves(carList[0])
        .onCall(1)
        .resolves(carList[1])
        .onCall(2)
        .resolves(carList[0])
        .onCall(3)
        .resolves(carList[1]);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna os carros vinculados ao motorista', async function () {
      const response = await driverService.createDriver('Pedro', [1, 2]);

      expect(response.type).to.equal(null);
      expect(response.message).to.deep.equal(createdDriverWithCars);
    });
    it('Verifica se a função não retorna erro', async function () {
      const response = await driverService.createDriver('Pedro', [1, 2]);

      expect(response.type).to.equal(null);
    });
  });
});
