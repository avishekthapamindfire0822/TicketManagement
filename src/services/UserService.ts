import { User } from "../interface/User.interface";
import prisma from "../config/db";
import * as bcrypt from "bcryptjs";
import { users } from "@prisma/client";
import { generateToken } from "../utils/GenerateToken";

export const registerUser = async (user: User): Promise<users | null> => {
  try {
    const { name, email, password } = user;

    const findUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
        },
      });
      return newUser;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const loginUser = async (user: User): Promise<any> => {
  try {
    const { email, password } = user;
    const findUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      const passwordCompare = await bcrypt.compare(password, findUser.password);
      if (passwordCompare) {
        const token = generateToken(findUser.id);
        const Userupdate = await prisma.users.update({
          where: {
            id: findUser.id,
          },
          data: {
            tokens: token,
          },
        });
        return Userupdate;
      }
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
