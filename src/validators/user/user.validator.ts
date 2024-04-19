import {object, string} from 'yup';

export const userCreateScheme = object({
  email: string()
    .email('Email must be valid')
    .required('This field is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('This field is required'),
  first_name: string().required('This field is required'),
  last_name: string().required('This field is required'),
});

export const userLoginScheme = object({
  email: string()
    .email('Email must be valid')
    .required('This field is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('This field is required'),
});
