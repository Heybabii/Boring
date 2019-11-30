export const updatePosition = db => (req, res, next) => {
  const { robotId } = req.params;
  const { position } = req.body;
  console.log(`robot${robotId}`);
  if (!position) return res.status(400).send('Request was ill-formed');
  const { x, y } = position;
  if (!x || !y) return res.status(400).send('Request was ill-formed');
  if (isNaN(x) || isNaN(y))
    return res.status(400).send('Request was ill-formed');
  if (!(robotId >= 1 && robotId <= 999999))
    return res.status(400).send('Request was ill-formed');
  if (
    !db
      .get('robots')
      .find({ robotId })
      .value()
  ) {
    db.get('robots')
      .push({ robotId, position })
      .write();
  } else {
    db.get('robots')
      .find({ robotId })
      .assign({ position })
      .write();
  }
  return res.status(204).send('Current position of the robot is updated');
};

export const getPosition = db => (req, res, next) => {
  const { robotId } = req.params;
  if (!(robotId >= 1 && robotId <= 999999))
    return res.status(400).send('Request was ill-formed');
  const robot = db
    .get('robots')
    .find({ robotId })
    .value();
  if (!robot) return res.status(404).send('Unrecognized robot ID');
  return res.status(200).send({ position: robot.position });
};
