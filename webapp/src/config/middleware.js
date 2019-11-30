import bodyParser from 'body-parser';
// import passport from '../passport';
import cors from 'cors';

// const isTest = process.env.NODE_ENV === 'test';
// const isDev = process.env.NODE_ENV === 'development';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(passport.init());
  app.use(cors());
};
