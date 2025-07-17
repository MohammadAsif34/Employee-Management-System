import jwt from "jsonwebtoken";
import Employee from "../models/EmployeeModel.js";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);

    // const resa = await Employee.find();

    if (username === "Admin" && password === "Admin") {
      const id = "686986430db20bc6dfa4c86c";
      const token = jwt.sign({ _id: id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("emstoken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        path: "/",
        maxAge: 24 * 60 * 60 * 1000,
      });
      //   console.log(token);

      return res.json({
        code: 200,
        status: "OK",
        message: "login successfully",
      });
    }
    res.json({ code: 200, status: "OK", message: "login failed" });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("emstoken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      code: 200,
      status: "OK",
      message: "logout successfully",
    });
  } catch (error) {
    res.json({ code: 500, status: "BAD", message: error.message });
  }
};
