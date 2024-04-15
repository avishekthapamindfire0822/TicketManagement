// import { NextFunction ,Request,Response} from "express";
// import * as jwt from "jsonwebtoken"
// const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split('.')[1];

//         jwt.verify(token, process.env.JWT_KEY as string, (err: jwt.VerifyErrors | null, decoded: jwt.JwtPayload): any => {
//             if (err) {
//                 console.log(err.message)
//                 return res.sendStatus(403);
//             }
//             next();
//         });
//     } else {
//         res.sendStatus(401);  
//     }
// };

// export default authenticateJWT;