import { param , body} from 'express-validator';
import moment from 'moment';

export const validateUpdateExpense = [
  param('id').notEmpty().withMessage('The "id" is required'),
  param('id').isString().withMessage('The "date" field must be a string'),

  body('description')
    .notEmpty().withMessage('The "description" field is required')
    .isString().withMessage('The "description" field must be a string')
    .isLength({ max: 191 }).withMessage('The "description" field must be at most 191 characters long'),

  body('date')
    .notEmpty().withMessage('The "date" field is required')
    .isString().withMessage('The "date" field must be a string')
    .custom(value => {
      const inputDate = moment(value, 'YYYY-MM-DD', true);
      if (!inputDate.isValid()) {
        throw new Error('The "date" field must be in the format YYYY-MM-DD');
      }
      if (inputDate.isAfter(moment())) {
        throw new Error('The "date" field cannot be a future date');
      }
      return true;
    }),

  body('value')
    .notEmpty().withMessage('The "value" field is required')
    .isNumeric().withMessage('The "value" field must be numeric')
    .isFloat({ gt: 0 }).withMessage('The "value" field must be greater than zero')
];
