import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import PasswordTextField from './PasswordTextField'

function LoginForm({ handleSubmit, isLoading, submitError }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(inputs.email || inputs.password)) {
      setError('Email or password must be inputed');
      return;
    }
    handleSubmit(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          name="email"
          type="email"
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
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm
