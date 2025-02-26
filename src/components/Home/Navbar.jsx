import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Badge, 
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../../context/CartContext';  

const Navbar = () => {
  const { cart = [], getCartItemCount = () => 0, getCartTotal = () => 0, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const menuItems = [
    { text: 'Anasayfa', path: '/' },
    { text: 'Ürünler', path: '/products' },
    { text: 'İletişim', path: '/contact' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#FF6600',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/"
            sx={{ 
              flexGrow: 1, 
              textDecoration: 'none', 
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            AntStore
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',
                  color: '#fff',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: location.pathname === item.path ? '100%' : '0%',
                    height: '3px',
                    backgroundColor: '#fff',
                    transition: 'width 0.3s ease-in-out'
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#fff'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Stack>

          <IconButton 
            onClick={toggleCart}
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <Badge 
              badgeContent={cart ? getCartItemCount() : 0} 
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#fff',
                  color: '#FF6600'
                }
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleCart}
      >
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Sepetim
          </Typography>
          <List>
            {cart && cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.title}
                    secondary={`${item.quantity} adet - ${(Number(item.price) * item.quantity).toLocaleString('tr-TR')} ₺`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          
          {cart && cart.length > 0 ? (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Toplam: {getCartTotal().toLocaleString('tr-TR')} ₺
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  mt: 2,
                  backgroundColor: '#FF6600',
                  '&:hover': {
                    backgroundColor: '#CC5200',
                  }
                }}
              >
                Sepeti Onayla
              </Button>
            </Box>
          ) : (
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
              Sepetiniz boş
            </Typography>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
