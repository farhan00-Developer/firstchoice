import express from "express";
import { setUser, getUser, getById } from "../controllers/userForm.js";
import createmployee from "../controllers/employee.controller.js";
import { sendEmail } from "../controllers/sendEmail.js";


const router = express.Router();

router.post("/register", setUser);
router.get("/getAllUser", getUser);
router.get("/getById/:id", getById);
router.post("/createmployee",createmployee);
router.post("/sendMail",sendEmail);



export default router;
