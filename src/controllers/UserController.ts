import { Request, Response } from "express";
import * as userService from "../services/UserService";
import { User } from "../interface/User.interface";
import { StatusCodes } from "http-status-codes";
import globalRequestHandler from "../utils/GlobalRequestHandler";

export const createUser = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const newUser: User = req.body;
    const createdUser = await userService.registerUser(newUser);
    console.log(createdUser);
    if (createdUser !== null) {
      res.status(StatusCodes.CREATED).json({
        message: "Create user successfully",
        data: createdUser,
      });
    } else {
      res.status(StatusCodes.NOT_ACCEPTABLE).json({
        message: "User Already Exists",
      });
    }
  }
);

export const userloginControoler = globalRequestHandler(
  async (req: Request, res: Response): Promise<any> => {
    const userdata: User = req.body;
    const save = await userService.loginUser(userdata);
    if (save) {
      res.status(StatusCodes.OK).json({
        message: "Update user successfully",
        data: save,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Invalid credentials",
      });
    }
  }
);
