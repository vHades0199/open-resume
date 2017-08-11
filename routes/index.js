import { Router } from 'express';
import requireDir from 'require-dir';
import bodyParser from 'body-parser';

// Setup Route Bindings

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// jsonParser, urlencodedParser,
const routes = Router();
const views = requireDir('./views', { recurse: true });

routes.get('/', views.home);
routes.get('/:id', views.detail);

export default routes;
