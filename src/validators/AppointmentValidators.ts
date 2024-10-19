import Joi from "joi"
import { Request, Response, NextFunction } from "express";
import { CreateOrUpdateAppointmentBody } from "../models/AppointmentModel";

export const createOrUpdateValidate = (body: CreateOrUpdateAppointmentBody) => {
    const schema = Joi.object({
        apointmentId: Joi.string().required(),
        patientId: Joi.string().required(),
        doctorId: Joi.string().required(),
        appointmentDate: Joi.string().required(),
        countryId: Joi.string().required(),
        state: Joi.string().required()

    }).strict();
    return schema.validate(body, {abortEarly: false})
}


export default function validateAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = createOrUpdateValidate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}
