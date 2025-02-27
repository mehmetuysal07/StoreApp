import React, { useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = React.useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          textAlign: 'center',
          borderRadius: 4,
          backgroundColor: '#f8f8f8'
        }}
      >
        <CheckCircleIcon 
          sx={{ 
            fontSize: 80, 
            color: '#4CAF50',
            mb: 2
          }} 
        />
        <Typography variant="h4" gutterBottom sx={{ color: '#2E7D32' }}>
          Siparişiniz Başarıyla Oluşturuldu!
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Siparişiniz için teşekkür ederiz. Sipariş detayları e-posta adresinize gönderilecektir.
        </Typography>
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {countdown} saniye içinde ana sayfaya yönlendirileceksiniz...
          </Typography>
        </Box>
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/products')}
            sx={{
              borderColor: '#FF6600',
              color: '#FF6600',
              '&:hover': {
                borderColor: '#CC5200',
                backgroundColor: 'rgba(255, 102, 0, 0.08)',
              }
            }}
          >
            Alışverişe Devam Et
          </Button>
          <Button 
            variant="contained"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#FF6600',
              '&:hover': {
                backgroundColor: '#CC5200',
              }
            }}
          >
            Ana Sayfaya Dön
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderSuccess; 