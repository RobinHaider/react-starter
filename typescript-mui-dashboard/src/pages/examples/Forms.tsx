import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as yup from 'yup';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import TextInput from '../../components/TextInput';
import CheckboxInput from '../../components/CheckboxInput';

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  description: string;
  gender: string;
  dateOfBirth: string;
  country: string;
  age: number | undefined;
  terms: boolean;
}

const initialValues: MyFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  description: '',
  gender: '',
  dateOfBirth: '',
  country: '',
  age: undefined,
  terms: false
};

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  description: yup.string(),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.date().typeError('Please Enter a valid date').required('Date of birth is required'),
  age: yup.number().integer().typeError('Please enter a valid number').required('Age is required'),
  country: yup.string().required('Country is required'),
  terms: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.').required('The terms and conditions must be accepted.')
});

export default function Forms() {
  const handleSubmit = (values: MyFormValues, formikHelpers: FormikHelpers<MyFormValues>) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextInput name="firstName" label="First Name" autoFocus={true} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="email" label="Email Address" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="password" label="Password" type="password" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="gender" label="Gender" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="age" label="Age" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="dateOfBirth" label="Date Of Birth" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="country" label="Country" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput name="description" label="Description" />
                  </Grid>
                  <Grid item xs={12}>
                    <CheckboxInput name="terms" legend="Terms Of Service" label="I accept the terms and policy." />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
