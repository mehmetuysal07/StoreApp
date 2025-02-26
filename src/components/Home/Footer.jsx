import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#FF6600', 
        color: 'white', 
        py: 6,
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hakkımızda */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Hakkımızda
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ lineHeight: 1.8 }}>
              Müşterilerimize en kaliteli ürünleri sunmak için çalışıyoruz.
            </Typography>
          </Grid>

          {/* Hızlı Linkler */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Hızlı Linkler
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink 
                href="/" 
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography variant="body2">
                  Ana Sayfa
                </Typography>
              </MuiLink>
              <MuiLink 
                href="/products" 
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography variant="body2">
                  Ürünler
                </Typography>
              </MuiLink>
              <MuiLink 
                href="/about" 
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography variant="body2">
                  Hakkımızda
                </Typography>
              </MuiLink>
              <MuiLink 
                href="/contact" 
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography variant="body2">
                  İletişim
                </Typography>
              </MuiLink>
            </Stack>
          </Grid>

          {/* İletişim Bilgileri */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              İletişim
            </Typography>
            <Stack spacing={2.5}>
              <Box display="flex" alignItems="center" gap={1.5}>
                <PhoneIcon fontSize="small" />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    '&:hover': { 
                      opacity: 0.8,
                      cursor: 'pointer' 
                    }
                  }}
                >
                  +90 123 456 7890
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1.5}>
                <EmailIcon fontSize="small" />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    '&:hover': { 
                      opacity: 0.8,
                      cursor: 'pointer' 
                    }
                  }}
                >
                  info@example.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1.5}>
                <LocationOnIcon fontSize="small" />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    '&:hover': { 
                      opacity: 0.8,
                      cursor: 'pointer' 
                    }
                  }}
                >
                  Antalya, Türkiye
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Sosyal Medya */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Sosyal Medya
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                component={MuiLink}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component={MuiLink}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component={MuiLink}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Alt Bilgi */}
        <Box 
          sx={{ 
            borderTop: 1, 
            borderColor: 'rgba(255, 255, 255, 0.2)', 
            mt: 6, 
            pt: 4, 
            textAlign: 'center',
            opacity: 0.9
          }}
        >
          <Typography variant="body2" color="inherit">
            © Tüm hakları saklıdır. 
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 