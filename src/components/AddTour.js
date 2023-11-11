import React,  {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

  
const defaultTheme = createTheme();

export default function AddTour() {
  
  const [availID, setAvailID] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [tourName, setTourName] = useState('');


  /** Make sure naming is correct */
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTour = {
      availID: availID,
      location: location,
      duration: duration,
      price: price,
      desc: desc,
      tourName: tourName
    }

    console.log(newTour);
    // axios.post('', newTour)
    //   .then(res => console.log(res.data))

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
         
           <Box component="form" noValidate  onSubmit={handleSubmit} sx={{ mt: 3 }}>
             <Grid container spacing={2}>
               <Grid item xs={12}>
                 <TextField
                   name="availID"
                   required
                   fullWidth
                   id="availID"
                   label="Availiability ID"
                   autoFocus
                   onChange={(event) => setAvailID(event.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="location"
                   label="Location"
                   name="location"
                  onChange={(event) => setLocation(event.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="duration"
                   label="Duration"
                   name="duration"
                   onChange={(event) => setDuration(event.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="price"
                   label="Price"
                   name="price"
                   onChange={(event) => setPrice(event.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   name="desc"
                   label="Description"
                   id="desc"
                   onChange={(event) => setDesc(event.target.value)}
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   fullWidth
                   name="preferences"
                   label="Tour Name"
                   id="tourName"
                   onChange={(event) => setTourName(event.target.value)}
                 />
               </Grid>
             </Grid>
             <Button
               id="signUpBtn"
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               Create Tour
             </Button>
             <Grid container justifyContent="flex-end">
             </Grid>
           </Box>
         </Box>
       </Container>
     </ThemeProvider>
  );
}