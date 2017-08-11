import app from './app';

require('dotenv').config();

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${PORT}`);
  console.log(`[${app.get('env')}]`);
});
