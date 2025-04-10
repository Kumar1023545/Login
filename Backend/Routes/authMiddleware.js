// const {verifyToken} =require('../Utils/jwtHelper')

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;
  
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ error: "Unauthorized - No token provided" });
//     }
  
//     const token = authHeader.split(" ")[1]; // Get actual token string
  
//     try {
//       const decoded = verifyToken(token); // Verify the token
//       req.user = decoded; // Store user data in req for later use
//       next(); // Continue to protected route
//     } catch (err) {
//       console.error("JWT error:", err.message);
//       if (err.name === "TokenExpiredError") {
//         return res.status(401).json({ error: "Token expired" });
//       }
//       return res.status(403).json({ error: "Invalid token" });
//     }
//   };

//   module.exports=authMiddleware;