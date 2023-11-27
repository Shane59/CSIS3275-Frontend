import React,  {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Input } from '@mui/material';
import config from '../config';

const defaultTheme = createTheme();

function TravelBuddySignUp() {

      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [description, setDescription] = useState('');
      const [applicationStatus, setApplicationStatus] = useState('Pending')
      const [resumeURL, setResumeURL] = useState('');
      const [profileImgURL, setProfileImgURL] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        const newTravelBuddy = {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          password: password,
          description: description,
          applicationStatus: applicationStatus,
          resumeURL: resumeURL,
          profileImageURL: profileImgURL
        }

        console.log(newTravelBuddy);
        axios.post(config.apiUrl + '/api/signUp/travelBuddy', newTravelBuddy)
          .then(res => console.log(res.data))

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
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={(event) => setLastName(event.target.value)}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      onChange={(event) => setUsername(event.target.value)}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(event) => setEmail(event.target.value)}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="desc"
                      label="Description"
                      type="desc"
                      id="desc"
                      autoComplete="desc"
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Grid>

                  {/** Upload resmue and profile img to blob storage 
                   * and saving link when creating the account
                  */}
                  <Grid item >
                    Upload resmue:
                    <Input type='file' />
                  </Grid>
                  <Grid item >
                    Upload profile picture:
                    <Input type='file' label="Upload Resume"  />
                  </Grid>
                </Grid>
                <Button
                  id="signUpBtn"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Travel Buddy Account
                </Button>
                <Grid container justifyContent="flex-end">
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    )
}

export default TravelBuddySignUp;