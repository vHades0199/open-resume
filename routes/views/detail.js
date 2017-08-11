const fs = require('fs');
const pug = require('pug');
const debug = require('debug')('resume:server');

module.exports = (req, res, next) => {
  const paths = {
    data: `./data/${req.params.id}/data.json`,
    view: `./data/${req.params.id}/view.pug`,
  };
  debug(paths);
  debug(fs.existsSync(paths.data));
  debug(fs.existsSync(paths.view));

  if (fs.existsSync(paths.data) && fs.existsSync(paths.view)) {
    const data = fs.readFileSync(paths.data, 'utf8');
    const obj = JSON.parse(data);
    const content = pug.renderFile(paths.view, obj);
    res.render('detail', { content });
  } else {
    next();
  }
};
