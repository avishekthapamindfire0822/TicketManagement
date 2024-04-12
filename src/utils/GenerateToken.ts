import * as jwt from "jsonwebtoken";

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId: userId }, "ABCDEF", {
    expiresIn: "1h",
  });
};
