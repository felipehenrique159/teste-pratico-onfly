import { param } from 'express-validator';
export const validateDeleteExpense = [
  param('id').notEmpty().withMessage('The "id" is required'),
  param('id').isString().withMessage('The "date" field must be a string'),
];
