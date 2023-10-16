const jwt = require("jsonwebtoken");
const secretKey = process.env.AUTH_KEY;

// Middleware to verify JWT token
export const isAuthorized = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 401, message: "Not authorized" });
  }
  const token = authHeader.split(' ')[1];

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ status: 401, message: "Not authorized" });
    }

    req.userId = decoded.userId; // Attach user ID to the request for further processing
    next();
  });
};
