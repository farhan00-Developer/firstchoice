import Joi from "joi";

const employeeSchema= Joi.object({
    name: Joi.string().required(),
    laborCardExpiry: Joi.date().required(),
    laborCardNo: Joi.string().required(),
    nationality: Joi.string().required(),
    employeeIdExpiry: Joi.date().required(),
    employeeIdNo: Joi.string().required()
});

export default employeeSchema;