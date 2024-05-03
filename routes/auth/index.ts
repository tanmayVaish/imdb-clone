import { Request, Response, Router } from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const router = Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

  // ======================== REGISTER ===========================

  router.post("/register", async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req?.body;
  
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
  
      if (existingUser) res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      if (!hashedPassword)
        res.status(400).json({ message: "Password could not be hashed" });
  
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
        },
      });
  
      if (!user) res.status(400).json({ message: "User could not be created" });
  
      res.status(200).json({ message: "User created successfully" });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  });

  // ======================== LOGIN ===========================
  
  router.post("/login", async function (req: Request, res: Response) {
    const { email, password } = req?.body;
  
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
    if (!user) res.status(400).json({ message: "User does not exist" });
  
    const match = await bcrypt.compare(password, user?.password || '');
  
    if (!match) res.status(400).json({ message: "Password is incorrect" });
  
    const jwt_secret = process.env.JWT_SECRET || "secret"

    // JWT token for 1 hour
    const token = jwt.sign({ id: user?.id }, jwt_secret, {
      expiresIn: "1h",
    });
  
    if (!token) res.status(400).json({ message: "Token could not be created" });
  
    // setting token in cookie
    res.cookie("jwt", token);
  
    res.status(200).json({ message: "User logged in successfully" });
  });
  
    // ======================== LOGOUT ===========================

  router.post("/logout", function (res:Response) {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  });
  
  export default router;