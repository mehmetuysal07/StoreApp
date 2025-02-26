import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  Chip,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // Örnek ürün verisi 
  const product = {
    id: parseInt(id),
    name: 'Premium Spor Ayakkabı',
    price: 999.99,
    description: 'Yüksek kaliteli malzemelerden üretilmiş, konforlu ve şık spor ayakkabı.',
    rating: 4.5,
    stock: 10,
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
    features: [
      'Nefes alabilir kumaş',
      'Hafif taban',
      'Ortopedik iç taban',
      'Su geçirmez dış yüzey'
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Ürün Görseli */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            src={product.images[0]}
            alt={product.name}
          />
        </Grid>

        {/* Ürün Bilgileri */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.rating})
            </Typography>
          </Box>

          <Typography variant="h5" color="primary" gutterBottom>
            {product.price.toLocaleString('tr-TR')} ₺
          </Typography>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Özellikler:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.features.map((feature, index) => (
                <Chip key={index} label={feature} variant="outlined" />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2">
              Stok Durumu: {product.stock} adet
            </Typography>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon sx={{ fontSize: 20 }} />}
              onClick={() => addToCart(product)}
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '0.9rem',
                py: 1,
                px: 4,
                backgroundColor: '#FF6600',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#CC5200',
                  boxShadow: 'none',
                }
              }}
            >
              SEPETE EKLE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 