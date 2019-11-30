export const updatePosition = db => (req, res, next) => {
  const { robotId } = res.params;
  const { position } = req.body;
  if (!position) return res.status(400).send('Request was ill-formed');
  const { x, y } = position;
  if (!x || !y) return res.status(400).send('Request was ill-formed');
  if (isNaN(x) || isNaN(y))
    return res.status(400).send('Request was ill-formed');
  if (!(robotId >= 1 && robotId <= 999999))
    return res.status(400).send('Request was ill-formed');
};
