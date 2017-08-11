import Express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParserPackage from 'cookie-parser';
// import methodOverride from 'method-override';

import routes from './routes/index';

const app = new Express();
const NODE_ENV = app.get('env');
const isDevMode = NODE_ENV === 'development';

app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(
  logger('dev', {
    skip: () => NODE_ENV === 'test',
  }),
);

const cookieParser = cookieParserPackage();

// app.use(methodOverride());

app.use(Express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', cookieParser, routes);

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
  res.render('errors/404');
});

// Error handlers
/** development error handler
 * will print stacktrace
 * production error handler
 * no stacktraces leaked to user
 */
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    res.status(err.status || 500);
    res.render(isDevMode ? 'errors/dev' : 'errors/500', {
      message: err.message,
      error: err,
    });
  }
});

export default app;
