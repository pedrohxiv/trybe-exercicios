/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateCarFields = require('../../../src/middlewares/validateCarFields');

const { expect } = chai;
chai.use(sinonChai);

describe('validateCarFields Middleware', function () {
  const validModel = 'Chevrolet Monza';
  const validColor = 'Branco';
  const validPlate = 'ABC1A2B';

  beforeEach(sinon.restore);

  describe('Adiciona um carro sem o campo model', function () {
    it('Verifica se a função retorna o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          color: validColor,
          licensePlate: validPlate,
        },
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"model" is required',
      });
      expect(next).to.have.not.been.called;
    });
  });

  describe('Adiciona um carro sem o campo color', function () {
    it('Verifica se a função retorna o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          licensePlate: validPlate,
        },
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"color" is required',
      });
      expect(next).to.have.not.been.called;
    });
  });

  describe('Adiciona um carro sem o campo licensePlate', function () {
    it('Verifica se a função retorna o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
        },
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"licensePlate" is required',
      });
      expect(next).to.have.not.been.called;
    });
  });
});
