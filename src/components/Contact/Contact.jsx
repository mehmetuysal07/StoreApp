import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        gutterBottom
        sx={{ 
          mb: 6,
          fontWeight: 700,
          color: '#333'
        }}
      >
        İletişim
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, height: '100%', backgroundColor: '#f5f5f5' }}>
            <Box sx={{ mb: 3 }}>
              <LocationOnIcon sx={{ fontSize: 40, color: '#FF6600', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Adres
              </Typography>
              <Typography color="text.secondary">
              Antalya, Türkiye
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <PhoneIcon sx={{ fontSize: 40, color: '#FF6600', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Telefon
              </Typography>
              <Typography color="text.secondary">
              +90 123 456 7890
              </Typography>
            </Box>

            <Box>
              <EmailIcon sx={{ fontSize: 40, color: '#FF6600', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                E-posta
              </Typography>
              <Typography color="text.secondary">
              info@example.com              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Bize Ulaşın
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Ad Soyad"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="E-posta"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Konu"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mesajınız"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#FF6600',
                    '&:hover': {
                      backgroundColor: '#CC5200',
                    }
                  }}
                >
                  Gönder
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 