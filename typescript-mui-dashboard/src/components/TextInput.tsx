import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

type TextInputProp = {
  name: string;
  label: string;
  autoFocus?: boolean;
  type?: string;
  variant?: 'outlined' | 'filled' | 'standard';
};

const TextInput = ({ name, label, autoFocus = false, type = 'text', variant = 'outlined' }: TextInputProp) => {
  const [field, meta, helpers] = useField(name);

  const configTextfield = {
    ...field,
    autoFocus: autoFocus
  };

  if (meta && meta.touched && meta.error) {
    return <TextField variant={variant} fullWidth label={label} inputProps={configTextfield} type={type} error={true} helperText={meta.error} />;
  }
  return <TextField variant={variant} fullWidth label={label} inputProps={configTextfield} type={type} />;
};

export default TextInput;
