import CustomAPIErorr from "../error/error_custome.js";

const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err === 400){
        return res.status(err.statusCode).json({ mes: err.message });
    }
    return res.status(500).json({ mes: `Something went wrong, try again later ${err.message}`});
} 

export default errorHandlerMiddleWare;