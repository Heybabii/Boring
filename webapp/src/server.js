import express from 'express';

import middlewareConfig from './config/middleware';
import config from './config';
import routes from './routes';

const app = express();

middlewareConfig(app);

app.use(routes(config));

app.listen(8000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${8000}`);
  }
});

export default app;
