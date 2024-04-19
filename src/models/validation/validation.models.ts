export interface IValidationError {
  errors: string;
  inner: IValidationError[];
  message: string;
  path: string;
}

export interface IError {
  [key: string]: string;
}

export interface ServerErrorsModel {
  errors: ServerError[];
}

export interface ServerError {
  field: string;
  message: string;
}
