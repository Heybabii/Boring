function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
export default (req, res, next) => {
    const { first_pos, second_pos , metric } = res.body;
    if (!first_pos || !second_pos) return res.status(424).sand("Insufficient data to compute the result");
    if (isJson(first_pos) && isJson(second_pos)){
        if (metric) {
            if(metric == "euclidean"){
                const p1 = first_pos;
                const p2 = second_pos;
                const distance = Math.sqrt((parseFloat(p1.x)-parseFloat(p2.x))*(parseFloat(p1.x)-parseFloat(p2.x))
                + (parseFloat(p1.y)-parseFloat(p1.y)*(parseFloat(p1.y)-parseFloat(p1.y))));
                return res.status(200).json( { distance });
            }
            else if(metric == "manhattan"){
                const p1 = first_pos;
                const p2 = second_pos;
                const distance = Math.abs((parseFloat(p1.x)-parseFloat(p2.x)))+Math.abs((parseFloat(p1.y)-parseFloat(p1.y)));
                return res.status(200).json( { distance });
            }
            else{
                return res.status(400).send("Request was ill-formed");
            }
        }
        else {
            const p1 = first_pos;
            const p2 = second_pos;
            const distance = Math.sqrt((parseFloat(p1.x)-parseFloat(p2.x))*(parseFloat(p1.x)-parseFloat(p2.x))
            + (parseFloat(p1.y)-parseFloat(p1.y)*(parseFloat(p1.y)-parseFloat(p1.y))));
            return res.status(200).json( { distance });
        }
    }
    else {
        return res.status(400).send("Request was ill-formed");
    }
}