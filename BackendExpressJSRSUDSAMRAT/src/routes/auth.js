const express = require('express');
const ControllerAdmin = require('../controllers/auth/index');
const MiddlewareVerifyToken = require('../middleware/verify-token');

const RouterAdmin = express.Router();

RouterAdmin.post('/login', ControllerAdmin.login);
RouterAdmin.post('/register', ControllerAdmin.register);

exports.RouterAdmin = RouterAdmin;
