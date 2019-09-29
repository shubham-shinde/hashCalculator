import homeController from './controllers/homeController';
import calculateHashController from './controllers/calculateHashController';

export default function(app) {
    app.get('/', homeController.get);
    
    app.post('/hash', calculateHashController.post);
}