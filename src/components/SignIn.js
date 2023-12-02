import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import config from '../config';


const defaultTheme = createTheme();

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const signInRequest = {
      username: data.get('username'),
      password: data.get('password')
    }

    axios.post(config.apiUrl + "/api/signIn", signInRequest)
      .then((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        if (JSON.parse(localStorage.getItem('currentUser')) === "admin") {
          window.location.href = '/admin';
        } else {
          window.location.href = '/';
        }
      })
      .catch((error) => {
        alert("username or password is wrong.")
        console.log(error)
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              id="signInBtn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <button className='signin-button' type='submit' style={{textDecoration:'none', color:'white'}}>
              Sign In
              </button>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
} 