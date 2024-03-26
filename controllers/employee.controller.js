import { response } from "express";
import employeeSchema from "../authenticate/employeeSchema.js";

const createmployee = (req, res) => {
  console.log(req.body);
  const { error } = employeeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  } else {
    res.status(200).json({ success: true, data: req.body });
  }
};

export default createmployee;
