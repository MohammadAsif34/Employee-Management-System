import jwt from "jsonwebtoken";
export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.emstoken;

    if (!token) {
      return res.json({
        code: 401,
        status: "UNAUTHORIZED",
        message: "No token found in cookies",
      });
    }

    const respoense = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = respoense._id;

    next();
    // res.json({
    //   code: 200,
    //   status: "OK",
    //   message: "Token verified and accessed",
    // });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "BAD",
      message: error.message,
    });
  }
};
