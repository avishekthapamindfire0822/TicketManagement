import * as jwt from "jsonwebtoken";

export const generateToken = (userId: number): string => {
  const token = jwt.sign({ userId: userId },process.env.JWT_KEY, {
    expiresIn: "1h",
  });
  return token
};
