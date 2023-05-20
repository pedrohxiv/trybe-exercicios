/* eslint-disable max-len */
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { carController } = require('../../../src/controllers');
const { carService } = require('../../../src/services');
const {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
} = require('./mocks/car-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Car Controller', function () {
  describe('Cadastra um novo carro com sucesso', function () {
    it('Verifica se a função retorna o status 201 e o json com o carro cadastrado', async function () {
      sinon.stub(carService, 'createCar').resolves({ type: null, message: createdCar });

      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
      expect(res.json).to.have.been.calledWith(createdCar);

      sinon.restore();
    });
  });

  describe('Cadastra um novo carro com campos vazios', function () {
    it('Verifica se, usando model vazio, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: emptyModelMessage });

      const res = {};
      const req = {
        body: {
          model: '',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(emptyModelMessage);

      sinon.restore();
    });

    it('Verifica se, usando color vazio, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: emptyColorMessage });

      const res = {};
      const req = {
        body: {
          model: validModel,
          color: '',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(emptyColorMessage);

      sinon.restore();
    });

    it('Verifica se, usando licensePlate vazio, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: emptyPlateMessage });

      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: '',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(emptyPlateMessage);

      sinon.restore();
    });
  });

  describe('Cadastra um novo carro com erros semânticos', function () {
    it('Verifica se, usando model inválido, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: invalidModelMessage });

      const res = {};
      const req = {
        body: {
          model: 'Fa',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(invalidModelMessage);

      sinon.restore();
    });

    it('Verifica se, usando color inválido, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: invalidColorMessage });

      const res = {};
      const req = {
        body: {
          model: validModel,
          color: 'a',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(invalidColorMessage);

      sinon.restore();
    });

    it('Verifica se, usando licensePlate inválido, a função retorna o status 422 e a mensagem de erro correta', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: typeError, message: invalidPlateMessage });

      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: '12',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(422);
      expect(res.json.args[0][0]).to.deep.equal(invalidPlateMessage);

      sinon.restore();
    });
  });
});
