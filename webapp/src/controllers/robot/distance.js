export default (req, res, next) => {
    
    const { first_pos, second_pos , metric } = req.body;
    var x1,y1,x2,y2;

    if (!first_pos || !second_pos) return res.status(424).send("Insufficient data to compute the result");
    if(typeof first_pos == "string"){
        if(/^robotF([1-9][0-9]*)$/.test(first_pos)){
            const id = first_pos.match(/[1-9][0-9]/);
            x1 = FROM_ID_X1;//for por
            y1 = FROM_ID_Y1;//for por
        }
        else return res.status(400).send("Request was ill-formed");
    }
    else{
        const { x:fx,y:fy } = first_pos;
        if (!fx || !fy) return res.status(400).send("Request was ill-formed");
        const p1 = first_pos;
        x1 = p1.x;
        y1 = p1.y;
    }

    if(typeof second_pos == 'string'){
        if(/^robotF([1-9][0-9]*)$/.test(second_pos)){
            const id = first_pos.match(/[1-9][0-9]/);
            x2 = FROM_ID_X2;//for por
            y2 = FROM_ID_Y2;//for por
        }
        else return res.status(400).send("Request was ill-formed");
    }
    else{
        const { x:sx,y:sy } = second_pos;
        if (!sx || !sy ) return res.status(400).send("Request was ill-formed");
        const p2 = second_pos;
        x2 = p2.x;
        y2 = p2.y;
    }
    if (metric) {
        if(metric == "euclidean"){
            const distance = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
            return res.status(200).json( { distance });
        }
        else if(metric == "manhattan"){
            const distance = Math.abs(x1-x2)+Math.abs(y1-y2);
            return res.status(200).json( { distance });
        }
        else{
            return res.status(400).send("Request was ill-formed");
        }
    }
    else {
        const distance = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
        return res.status(200).json( { distance });
    }
}
