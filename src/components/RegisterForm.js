import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import PasswordTextField from './PasswordTextField'

function RegisterForm({ handleSubmit, isLoading, submitError }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const validatePassword = (pass) => {
    if (pass && pass.lenght < 12) {
      return false;
    }
    if (pass.includes('< or >') || pass.includes('<or>')) {
      return false;
    }
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    if (!specialChars.test(pass)) {
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(inputs.email || inputs.password)) {
      setError('Email or password must be inputed');
      return;
    }
    if (!validatePassword(inputs.password)) {
      setError('Password must have special character');
      return;
    }
    handleSubmit(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          type="email"
          name="email"
          value={inputs.email || ''}
          label="Email Address"
          variant="outlined"
          onChange={handleChange}></TextField>
        <PasswordTextField
          name="password"
          type="password"
          value={inputs.password || ''}
          onChange={handleChange}
          label="Password"
          variant="outlined"></PasswordTextField>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
        <Button type="submit" variant="contained" disabled={isLoading}>
          Register
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;
