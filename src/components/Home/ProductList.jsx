<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 7f0f898 (İkinci commit)
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
<<<<<<< HEAD

// Örnek ürün verileri (gerçek uygulamada API'den gelecektir)
const products = [
  {
    id: 1,
    title: "Vintage Deri Çanta",
    description: "El yapımı, dayanıklı vintage deri çanta. Günlük kullanım için ideal.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "2999",
    rating: 4.5,
    discount: "20%",
    stock: 15
  },
  {
    id: 2,
    title: "Akıllı Saat Pro",
    description: "Fitness takibi, kalp ritmi ölçümü ve bildirim özellikleriyle tam donanımlı akıllı saat.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "3499",
    rating: 5,
    discount: "15%",
    stock: 8
  },
  {
    id: 3,
    title: "Kablosuz Kulaklık",
    description: "Aktif gürültü önleme özellikli, uzun pil ömürlü premium kablosuz kulaklık.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "4299",
    rating: 4.8,
    discount: "10%",
    stock: 12
  },
  {
    id: 4,
    title: "Retro Polaroid Kamera",
    description: "Anılarınızı anında ölümsüzleştiren nostaljik tasarımlı fotoğraf makinesi.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "1899",
    rating: 4.6,
    discount: "25%",
    stock: 20
  },
  {
    id: 5,
    title: "Minimalist Cüzdan",
    description: "İnce tasarımlı, RFID korumalı gerçek deri cüzdan.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "899",
    rating: 4.7,
    discount: "30%",
    stock: 25
  },
  {
    id: 6,
    title: "Mekanik Klavye",
    description: "RGB aydınlatmalı, özel anahtarlı profesyonel oyuncu klavyesi.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "2499",
    rating: 4.9,
    discount: "15%",
    stock: 10
  }
];

export default function ProductList() {
  const { addToCart } = useCart();
=======
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Tıklama olayının ürün detayına yönlendirmesini engelle
    addToCart(product);
  };
>>>>>>> 7f0f898 (İkinci commit)

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
<<<<<<< HEAD
=======
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
>>>>>>> 7f0f898 (İkinci commit)
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
<<<<<<< HEAD
                  onClick={() => addToCart(product)}
=======
                  onClick={(e) => handleAddToCart(e, product)}
>>>>>>> 7f0f898 (İkinci commit)
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
<<<<<<< HEAD
}
=======
};

export default ProductList;
>>>>>>> 7f0f898 (İkinci commit)
