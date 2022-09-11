import React from 'react';
import { useField, useFormikContext } from 'formik';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

type CheckboxInputProp = {
  name: string;
  label: string;
  legend?: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({ name, label, legend = '', defaultChecked = false }: CheckboxInputProp) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const config = {
    ...field,
    defaultChecked,
    onChange: handleChange
  };

  return (
    <FormControl error={Boolean(meta?.error)}>
      {legend && <FormLabel component="legend">{legend}</FormLabel>}
      <FormGroup>
        <FormControlLabel control={<Checkbox {...config} />} label={label} />
      </FormGroup>
      {meta && meta.touched && meta.error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxInput;
