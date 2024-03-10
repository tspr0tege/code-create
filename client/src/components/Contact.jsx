import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const {formFirstName, formLastName, formEmail, formMessage} = event.target.elements
    const formData = {
      firstName: formFirstName.value, 
      lastName: formLastName.value, 
      email: formEmail.value, 
      message: formMessage.value
    };
    fetch("https://formsubmit.co/ajax/bacfd32b9a0dffec1a8cdc9de928f17e", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    // console.log(formData)
  }

  return (
    <Container id="contact">
      <form onSubmit={handleSubmit}>
        <Typography component="h2" color="text.primary" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Ask any questions or get on the waitlist for a session
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Stack spacing={2} direction="row">
            <TextField
              id="formFirstName"
              label="First name"
              size="small"
              variant="outlined"
              aria-label="Enter your first name"
              placeholder="First Name"
              fullWidth
              required
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your first name',
              }}
            />
            <TextField
              id="formLastName"
              label="Last name"
              size="small"
              variant="outlined"
              aria-label="Enter your last name"
              placeholder="Last Name"
              fullWidth
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your last name',
              }}
            />
          </Stack>
          <TextField
            id="formEmail"
            label="Email"
            size="small"
            variant="outlined"
            aria-label="Enter your email address"
            placeholder="Your email address"
            fullWidth
            required
            inputProps={{
              autocomplete: 'off',
              ariaLabel: 'Enter your email address',
            }}
          />
          <TextField 
            id="formMessage"
            label="Message"
            variant="outlined"
            aria-label="Write your message"
            placeholder="Enter message here..."
            multiline
            rows={5}
            fullWidth
            required
            sx={{width: '100%'}}
          />
          <Button variant="contained" color="primary" type="submit">
            Contact
          </Button>
        </Box>
      </form>
    </Container>
  )
}