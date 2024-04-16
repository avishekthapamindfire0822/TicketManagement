import { NextFunction ,Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import * as jwt from "jsonwebtoken"
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    let authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader;
       jwt.verify(token, process.env.JWT_KEY as string, (err: jwt.VerifyErrors | null, decoded: jwt.JwtPayload): any => {
     
        if (err) {
                console.log(err.message)
              return  res.status(StatusCodes.BAD_REQUEST).json({
                    message:"not authorized"
                })            }
            next();
        });
    } else {
        // res.sendStatus({});  
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"something went worng"
        })
    }
};

export default authenticateJWT;