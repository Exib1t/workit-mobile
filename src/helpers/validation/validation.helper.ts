import {
  IError,
  IValidationError,
  ServerError,
} from '../../models/validation/validation.models.ts';

class ValidationHelper {
  constructor() {}

  public getError(errors: IValidationError): IError {
    const error: IError = {};

    errors.inner.forEach(err => {
      error[err.path] = err.message;
    });

    return error;
  }

  public transformError(errors: ServerError[]): IError {
    const errorObject: IError = {};

    errors.forEach(err => {
      errorObject[err.field] = err.message;
    });

    return errorObject;
  }
}

export default new ValidationHelper();
