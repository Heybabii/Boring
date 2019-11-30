import express from 'express';
import { distance } from '../controllers/robot';

export default config => {
  const routers = express();
  routers.use('distance', distance);
  routers.use('/private', (req, res) => res.send('Hello-World'));

  return routers;
};
