const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
  driverList,
  createdDriverWithCars,
  createdDriverWithoutCars,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Driver Controller', function () {
  describe('Lista todas as pessoas motoristas', function () {
    beforeEach(async function () {
      const execute = { type: null, message: driverList };

      sinon.stub(driverService, 'getDrivers').resolves(execute);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o status com o código 200', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
    });

    it('Verifica se a função retorna o json com a lista de motoristas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.json).to.have.been.calledWith(driverList);
    });
  });

  describe('Cadastra uma nova pessoa motorista com carros', function () {
    beforeEach(async function () {
      const execute = { type: null, message: createdDriverWithCars };

      sinon.stub(driverService, 'createDriver').resolves(execute);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
    });

    it('Verifica se a função retorna o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json).to.have.been.calledWith(createdDriverWithCars);
    });
  });

  describe('Cadastra uma nova pessoa motorista sem carros', function () {
    beforeEach(async function () {
      const execute = { type: null, message: createdDriverWithoutCars };

      sinon.stub(driverService, 'createDriver').resolves(execute);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
    });

    it('Verifica se a função retorna o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json).to.have.been.calledWith(createdDriverWithoutCars);
    });
  });

  describe('Cadastra uma nova pessoa motorista com erros semânticos', function () {
    beforeEach(async function () {
      const execute = {
        type: 'INVALID_VALUE',
        message: '"name" length must be at least 3 characters long',
      };

      sinon.stub(driverService, 'createDriver').resolves(execute);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o status com o código 422', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pe',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
    });

    it('Verifica se a função retorna o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pe',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json.args[0][0]).to.deep.equal(
        '"name" length must be at least 3 characters long',
      );
    });
  });

  describe('Cadastra uma nova pessoa motorista com erros de id', function () {
    beforeEach(async function () {
      const execute = {
        type: 'CAR_NOT_FOUND',
        message: 'Some car is not found',
      };

      sinon.stub(driverService, 'createDriver').resolves(execute);
    });

    afterEach(async function () {
      sinon.restore();
    });

    it('Verifica se a função retorna o status com o código 404', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(404);
    });

    it('Verifica se a função retorna o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Pedro',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json.args[0][0]).to.deep.equal('Some car is not found');
    });
  });
});
