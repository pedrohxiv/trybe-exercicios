const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API REST de Gerenciamento de Tarefas', function () {
  describe('Usando o método POST em /tasks', function () {
    it('Retorna uma mensagem de tarefa cadastrada', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

      const response = await chai.request(app).post('/tasks').send({
        nome: 'Fazer compras',
        descricao: 'Tarefa de Casa',
      });

      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 1 cadastrada com sucesso',
      });
    });
  });

  describe('Usando o método PUT em /tasks/:id', function () {
    it('Retorna uma mensagem de tarefa não encontrada, ao tentar atualizar uma tarefa inexistente', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

      const response = await chai.request(app).put('/tasks/999').send({
        nome: 'Arrumar a casa',
        descricao: 'Tarefa de Casa',
      });

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 999 não encontrada',
      });
    });

    it('Retorna uma mensagem de tarefa atualizada com sucesso, ao tentar atualizar uma tarefa existente', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const response = await chai.request(app).put('/tasks/1').send({
        nome: 'Arrumar a casa',
        descricao: 'Tarefa de Casa',
      });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 1 atualizada com sucesso',
      });
    });
  });

  describe('Usando o método DELETE em /tasks/:id', function () {
    it('Retorna uma mensagem de tarefa não encontrada, ao tentar excluir uma tarefa inexistente', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

      const response = await chai.request(app).delete('/tasks/999');

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 999 não encontrada',
      });
    });

    it('Retorna uma mensagem de tarefa excluida com sucesso, ao tentar excluir uma tarefa existente', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const response = await chai.request(app).delete('/tasks/1');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 1 excluida com sucesso',
      });
    });
  });

  describe('Usando o método GET em /tasks', function () {
    const taskList = [
      {
        id: 1,
        nome: 'Fazer compras',
        descricao: 'Tarefa de Casa',
      },
      {
        id: 2,
        nome: 'Arrumar a casa',
        descricao: 'Tarefa de Casa',
      },
    ];

    it('Retorna a lista de todas as tarefas', async function () {
      sinon.stub(connection, 'execute').resolves([taskList]);

      const response = await chai.request(app).get('/tasks');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(taskList);
    });
  });

  describe('Usando o método GET em /tasks/:id', function () {
    const task = {
      id: 1,
      nome: 'Fazer compras',
      descricao: 'Tarefa de Casa',
    };

    it('Retorna uma mensagem de tarefa não encontrada, ao tentar consultar uma tarefa inexistente', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);

      const response = await chai.request(app).get('/tasks/999');

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal({
        message: 'Tarefa de id 999 não encontrada',
      });
    });

    it('Retorna a tarefa encontrada, ao tentar consultar uma tarefa existente', async function () {
      sinon.stub(connection, 'execute').resolves([[task]]);

      const response = await chai.request(app).get('/tasks/1');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(task);
    });
  });

  afterEach(sinon.restore);
});
