<<<<<<< HEAD
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/CartContext";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";

const pages = ["Ana Sayfa", "Ürünler", "Hakkımızda", "İletişim"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCartClick = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorElCart(null);
  };

  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to right, #FF6600, #FF6600)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StorefrontIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "white",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              background:
                "linear-gradient(45deg,rgb(239, 235, 235),rgb(239, 239, 239))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            STORE APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  background: "#FF6600",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <StorefrontIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "white",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              background: "linear-gradient(45deg, #FF6B6B, #FFE66D)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.2rem",
            }}
          >
            GHU TUKKAN
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 2,
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: 500,
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    width: "0",
                    height: "2px",
                    bottom: "7px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                    "&:before": {
                      width: "80%",
                    },
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton
            onClick={handleCartClick}
            sx={{
              color: "white",
              ml: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Popover
            open={Boolean(anchorElCart)}
            anchorEl={anchorElCart}
            onClose={handleCartClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPopover-paper": {
                width: "350px",
                maxHeight: "400px",
                mt: 1,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              },
            }}
          >
            {cartItems.length > 0 ? (
              <>
                <List sx={{ p: 0 }}>
                  {cartItems.map((item) => (
                    <ListItem
                      key={item.id}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => removeFromCart(item.id)}
                          sx={{ color: "error.main" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                      sx={{
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        "&:last-child": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          src={item.image}
                          variant="rounded"
                          sx={{ width: 60, height: 60, mr: 1 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <CurrencyLiraIcon sx={{ fontSize: 16 }} />
                              {item.price} x {item.quantity}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Box
                  sx={{
                    p: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "grey.50",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    Toplam: <CurrencyLiraIcon sx={{ fontSize: 20 }} />
                    {totalPrice.toLocaleString("tr-TR")}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: "#FF6600",
                      "&:hover": {
                        backgroundColor: "#CC5200",
                      },
                    }}
                  >
                    Sepeti Onayla
                  </Button>
                </Box>
              </>
            ) : (
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography color="text.secondary">Sepetiniz boş</Typography>
              </Box>
            )}
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
=======
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
>>>>>>> 7f0f898 (İkinci commit)

export default Navbar;
