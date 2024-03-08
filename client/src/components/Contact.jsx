import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
    console.log(formData)
  }

  return (
    <Container id="contact">
      <form onSubmit={handleSubmit}>
        <Typography variant="body2" fontWeight={600} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Ask any questions or get scheduled for a session
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