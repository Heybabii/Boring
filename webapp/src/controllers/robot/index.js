import { Router as router } from 'express';
import distance from './distance';

export { distance };

export default () => {
  const api = router();

  // api.post(
  //   '/signin',
  //   passport.authenticate('local', { session: false }),
  //   signIn,
  // );

  // api.post('/signup', signUp(models));

  return api;
};
