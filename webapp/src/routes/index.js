import express from 'express';
// import User from '../models/user';

// import auth from '../controllers/auth';

// const models = { User };

export default config => {
  const routers = express();
  routers.post('/auth', auth(null, config));

  routers.use('/private', (req, res) => {
    return res.status(200).json('Hello-World');
  });

  return routers;
};
