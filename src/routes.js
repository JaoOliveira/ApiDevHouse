const { Router } =require('express');
const multer =require('multer');
const uploadConfig =require('./config/upload');


const SessionController =require('./controllers/SessionController');
const HouseController =require('./controllers/HouseController')
const DashboardsController =require('./controllers/DashboardsController');
const ReserveControlle =require('./controllers/ReserveController');


const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail') ,HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.index);
routes.get('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardsController.show);

routes.post('/houses/:house_id/reserve', ReserveControlle.store);
routes.get('/reserves', ReserveControlle.index);
routes.delete('/reserves/cancel', ReserveControlle.destroy);

module.exports = routes;