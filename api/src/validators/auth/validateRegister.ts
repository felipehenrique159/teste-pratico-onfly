import { body } from 'express-validator';

export const validateRegister = [
  body('name')
    .notEmpty().withMessage('The "name" field is required')
    .isString().withMessage('The "name" field must be a string'),

  body('email')
    .notEmpty().withMessage('The "email" field is required')
    .isString().withMessage('The "email" field must be a string'),

  body('password')
    .notEmpty().withMessage('The "password" field is required')
    .isString().withMessage('The "password" field must be a string')
];

