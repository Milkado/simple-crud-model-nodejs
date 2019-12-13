const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const Controller = require('./controllers/Controller')

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/route', Controller.index);
routes.post('/route', upload.single('image'), Controller.store)

module.exports = routes;

