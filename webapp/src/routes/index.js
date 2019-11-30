import express from 'express';
import robot, { distance } from '../controllers/robot';

export default db => {
  const routers = express();
  routers.post('/distance', distance);

  routers.use('/robot', robot(db));

  routers.use('/private', (req, res) => res.send('Hello-World'));

  return routers;
};
