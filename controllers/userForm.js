import express from "express";
import model from "../model/userModel.js";

export const setUser = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    };

    let data = await new model(newUser);
    let result = await data.save();

    res.status(200).send({
      success: true,
      message: "Data Saved Successfully",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while saving data.",
      error: error.message,
    });
  }
};
//getting all users
export const getUser = async (req, res) => {
  try {
    let users = await model.find();
    res.send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Server Error" });
  }
};
//get user by id
export const getById = async (req, res) => {
  try {
    let user = await model.findById({_id: req.params.id});
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Server Error" });
  }
};
