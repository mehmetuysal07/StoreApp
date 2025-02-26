import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Box,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  Select,
  Slider,
  Chip,
  Button,
  CardActions
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { products, categories } from '../../data/products';
import HomeIcon from '@mui/icons-material/Home';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useCart } from '../../context/CartContext';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from '@mui/material/Rating';

const ProductsPage = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // Mobil için filtre görünürlüğü

  // Fiyat aralığı değiştiğinde
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Kategori seçimi
  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  // Ürünleri filtrele
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = Number(product.price) >= priceRange[0] && Number(product.price) <= priceRange[1];
    const matchesCategories = selectedCategories.length === 0 || 
      product.categories.some(cat => selectedCategories.includes(cat));

    return matchesSearch && matchesPrice && matchesCategories;
  });

  // Ürünleri sırala
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return Number(a.price) - Number(b.price);
      case 'price-desc':
        return Number(b.price) - Number(a.price);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Link'in çalışmasını engelle
    e.stopPropagation(); // Event bubbling'i engelle
    addToCart(product);
  };

  const handleProductClick = (id) => {
    // Implement the logic to handle product click
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.primary',
            textDecoration: 'none',
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Anasayfa
        </Link>
        <Typography color="text.primary">Ürünler</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Filtreler */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, height: '100%', position: 'sticky', top: 20 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FilterListIcon />
                Filtreler
              </Typography>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                Temizle
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Ürün Ara"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography gutterBottom>Fiyat Aralığı</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
                sx={{ color: '#FF6600' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">{priceRange[0]} ₺</Typography>
                <Typography variant="body2">{priceRange[1]} ₺</Typography>
              </Box>
            </Box>

            <FormControl fullWidth size="small" sx={{ mb: 3 }}>
              <InputLabel>Kategoriler</InputLabel>
              <br/>
              <Select
                multiple
                value={selectedCategories}
                onChange={handleCategoryChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip 
                        key={value} 
                        label={value} 
                        size="small"
                        icon={<span>{categories.find(c => c.name === value)?.icon}</span>}
                      />
                    ))}
                  </Box>
                )}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span>{category.icon}</span>
                      {category.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Sırala</InputLabel>
              <br/>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="featured">Öne Çıkanlar</MenuItem>
                <MenuItem value="price-asc">Fiyat: Düşükten Yükseğe</MenuItem>
                <MenuItem value="price-desc">Fiyat: Yüksekten Düşüğe</MenuItem>
                <MenuItem value="name">İsme Göre</MenuItem>
                <MenuItem value="rating">Puana Göre</MenuItem>
              </Select>
            </FormControl>
          </Card>
        </Grid>

        {/* Ürün Listesi */}
        <Grid item xs={12} md={9}>
          {/* Sonuç sayısı ve mobil filtre butonu */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {sortedProducts.length} ürün bulundu
            </Typography>
            <Button
              sx={{ display: { md: 'none' } }}
              startIcon={<FilterListIcon />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filtreler
            </Button>
          </Box>

          <Grid container spacing={4}>
            {sortedProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 8px 25px rgba(0,0,0,0.12)",
                    },
                    position: 'relative',
                    backgroundColor: '#fff',
                  }}
                  onClick={() => handleProductClick(product.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      pt: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    {product.discount && (
                      <Chip
                        label={product.discount}
                        color="error"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontWeight: 'bold',
                          borderRadius: 1,
                          backgroundColor: '#dc3545',
                        }}
                      />
                    )}
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 500,
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
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
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#FF6600',
                        mb: 0.5
                      }}
                    >
                      {Number(product.price).toLocaleString('tr-TR')} ₺
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Stok: {product.stock} adet
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      variant="text" 
                      startIcon={<FavoriteIcon />}
                      onClick={(e) => e.stopPropagation()}
                      sx={{ 
                        color: '#FF6600',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#CC5200',
                        }
                      }}
                    >
                      Favori
                    </Button>
                    <Button 
                      variant="contained" 
                      startIcon={<ShoppingCartIcon />}
                      onClick={(e) => handleAddToCart(e, product)}
                      sx={{ 
                        ml: 'auto',
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsPage; 