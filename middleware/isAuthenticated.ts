import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Extend the Request interface to include a user property
declare global {
    namespace Express {
      interface Request {
        user?: any; // Define the user property
      }
    }
  }
  

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  // Get the JWT token from the cookie
  const token = req.cookies.jwt;

  // Check if the token exists
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");

    // Attach the decoded user data to the request object
    req.user = decoded;

    // Call the next middleware
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ message: "Unauthorized: Invalid token." });
  }
};

module.exports = isAuthenticated;