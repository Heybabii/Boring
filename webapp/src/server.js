import express from 'express';

import middlewareConfig from './config/middleware';

import routes from './routes';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ robots: [] }).write();

const app = express();

middlewareConfig(app);

app.use(routes(db));

app.listen(8000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${8000}`);
  }
});

export default app;
