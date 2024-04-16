import * as jwt from "jsonwebtoken";



export const generateToken = (userId: number): string => {
  console.log("test",process.env.JWT_KEY)
  const token = jwt.sign({ userId: userId },process.env.JWT_KEY, {
    expiresIn: 50000000,
  });
  console.log("token",token)
  return token
};
