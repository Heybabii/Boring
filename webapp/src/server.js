import express from 'express';

import middlewareConfig from './config/middleware';

import routes from './routes';

const app = express();

middlewareConfig(app);

app.use(routes({}));

app.listen(8000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${8000}`);
  }
});

export default app;
