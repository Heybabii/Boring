export default (req, res, next) => {
    const { first_pos, second_pos } = res.body;
     
    const distance = Math.sqrt((first_pos.x-second_pos.x)*(first_pos.x-second_pos.x)
    +(first_pos.y-second_pos.y)*(first_pos.y-second_pos.y));

    return res.status(200).json( { distance });
  };
  