import React from 'react';
import { Grid, Container, Box, Rating, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ 
          mb: 8,
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          position: 'relative',
          fontFamily: '"Roboto Slab", "Roboto", "Arial", sans-serif',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: 60, sm: 80, md: 100 },
            height: 5,
            backgroundColor: '#FF6600',
            borderRadius: 2,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: 140, sm: 180, md: 200 },
            height: 2,
            backgroundColor: 'rgba(255, 102, 0, 0.3)',
            borderRadius: 2,
          }
        }}
      >
        Ürünlerimiz
      </Typography>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.12)",
                },
                position: 'relative',
              }}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              {product.discount && (
                <Chip
                  label={`-${product.discount}`}
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}
                />
              )}
              <CardMedia
                sx={{ 
                  height: 250,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                  }
                }}
                image={product.image}
                title={product.title}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={product.rating} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.rating})
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="#FF6600" 
                  sx={{ 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5 
                  }}
                >
                  <CurrencyLiraIcon sx={{ fontSize: 20 }} />
                  {product.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Stok: {product.stock} adet
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  px: 3,
                  pb: 3,
                  gap: 2,
                }}
              >
                <Button 
                  variant="text" 
                  color="secondary"
                  startIcon={<FavoriteIcon sx={{ fontSize: 20 }} />}
                  sx={{ 
                    flex: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    py: 1,
                    color: '#FF8533',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 102, 0, 0.08)',
                      color: '#FF6600',
                    }
                  }}
                >
                  Favori
                </Button>
                <Button 
                  variant="contained" 
                  startIcon={<ShoppingCartIcon sx={{ fontSize: 20 }} />}
                  onClick={(e) => handleAddToCart(e, product)}
                  sx={{ 
                    flex: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    py: 1,
                    backgroundColor: '#FF6600',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#CC5200',
                      boxShadow: 'none',
                    }
                  }}
                >
                  Sepete Ekle
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
