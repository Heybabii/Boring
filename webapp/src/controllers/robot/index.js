import { Router as router } from 'express';
import distance from './distance';
import { updatePosition, getPosition } from './position';

export { distance };

export default db => {
  const api = router();

  api.put('/:robotId/position', updatePosition(db));
  api.get('/:robotId/position', getPosition(db));

  return api;
};
