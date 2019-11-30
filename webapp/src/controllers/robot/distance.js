<<<<<<< HEAD
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export default (req, res, next) => {
  const { first_pos, second_pos, metric } = res.body;
  if (!first_pos || !second_pos)
    return res.status(424).send('Insufficient data to compute the result');
  if (isJson(first_pos) && isJson(second_pos)) {
    if (metric) {
      if (metric == 'euclidean') {
        const p1 = first_pos;
        const p2 = second_pos;
        const distance = Math.sqrt(
          (parseFloat(p1.x) - parseFloat(p2.x)) *
            (parseFloat(p1.x) - parseFloat(p2.x)) +
            (parseFloat(p1.y) -
              parseFloat(p1.y) * (parseFloat(p1.y) - parseFloat(p1.y))),
        );
        return res.status(200).json({ distance });
      } else if (metric == 'manhattan') {
        const p1 = first_pos;
        const p2 = second_pos;
        const distance =
          Math.abs(parseFloat(p1.x) - parseFloat(p2.x)) +
          Math.abs(parseFloat(p1.y) - parseFloat(p1.y));
        return res.status(200).json({ distance });
      } else {
        return res.status(400).send('Request was ill-formed');
      }
    } else {
      const p1 = first_pos;
      const p2 = second_pos;
      const distance = Math.sqrt(
        (parseFloat(p1.x) - parseFloat(p2.x)) *
          (parseFloat(p1.x) - parseFloat(p2.x)) +
          (parseFloat(p1.y) -
            parseFloat(p1.y) * (parseFloat(p1.y) - parseFloat(p1.y))),
      );
      return res.status(200).json({ distance });
    }
  } else {
    return res.status(400).send('Request was ill-formed');
  }
};
=======
export default (req, res, next) => {
    const { first_pos, second_pos , metric } = req.body;
    if (!first_pos || !second_pos) return res.status(424).sand("Insufficient data to compute the result");
    const { x:fx,y:fy } = first_pos;
    const { x:sx,y:sy } = second_pos;
    if (!fx || !fy || !sx || !sy ) return res.status(400).send("Request was ill-formed");
    if(isNaN(fx) || isNaN(fy) || isNaN(sx) || isNaN(sy)) return res.status(400).send("Request was ill-formed");
    if (metric) {
        if(metric == "euclidean"){
            const p1 = first_pos;
            const p2 = second_pos;
            const distance = Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
            return res.status(200).json( { distance });
        }
        else if(metric == "manhattan"){
            const p1 = first_pos;
            const p2 = second_pos;
            const distance = Math.abs(p1.x-p2.x)+Math.abs(p1.y-p2.y);
            return res.status(200).json( { distance });
        }
        else{
            return res.status(400).send("Request was ill-formed");
        }
    }
    else {
        const p1 = first_pos;
        const p2 = second_pos;
        const distance = Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
        return res.status(200).json( { distance });
    }
}
>>>>>>> 5305d6305d9ec580a0ec5e976d01d856415aaa88
