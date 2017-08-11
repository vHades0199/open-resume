const fs = require('fs');

module.exports = (req, res) => {
  const data = fs.readFileSync('./data/list.json', 'utf-8');

  res.render('index', { data: JSON.parse(data) });
};
