const Login = require("../models/Login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { f_userName, f_Pwd } = req.body;

  try {
    const user = await Login.findOne({ f_userName });
    if (!user) return res.status(401).json({ message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(f_Pwd, user.f_Pwd);
    if (!isMatch) return res.status(401).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
