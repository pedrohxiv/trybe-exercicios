const bodyParser = require('body-parser');
const express = require('express');

const accountController = require('./controllers/Account');
const commentController = require('./controllers/Comment');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', accountController.getById);
app.get('/accounts-v2/:id', accountController.getByIdLean);
app.get('/accounts/:id/comments', commentController.getCommentsById);
app.post('/accounts', accountController.createAccountAndProfile);
app.post('/accounts/:id/comment', commentController.createComment);

module.exports = app;
