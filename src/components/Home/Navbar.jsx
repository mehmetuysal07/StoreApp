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
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const pages = ["Ana Sayfa", "Ürünler", "Hakkımızda", "İletişim"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { cart, getCartTotal, getCartItemCount, removeFromCart } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

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

  const handleCheckout = () => {
    setAnchorElCart(null);
    navigate('/checkout');
  };

  const handleUserClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorElUser(null);
  };

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

          <Box
            sx={{
              ml: 2,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              '&:hover': {
                '& .user-icon': {
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              },
            }}
            onClick={handleUserClick}
          >
            <IconButton
              className="user-icon"
              sx={{
                color: 'white',
                transition: 'all 0.2s ease',
                padding: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <PersonOutlineIcon 
                sx={{ 
                  fontSize: 28,
                  transition: 'all 0.2s ease',
                }} 
              />
            </IconButton>
            {isAuthenticated && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: '#4CAF50',
                  borderRadius: '50%',
                  position: 'absolute',
                  bottom: 6,
                  right: 6,
                  border: '2px solid #FF6600',
                }}
              />
            )}
          </Box>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleUserClose}
            onClick={handleUserClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
                mt: 1.5,
                minWidth: 200,
                '& .MuiMenuItem-root': {
                  px: 2,
                  py: 1.5,
                  gap: 1.5,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {isAuthenticated ? (
              <>
                <MenuItem onClick={() => navigate('/profile')}>
                  <PersonIcon sx={{ color: '#666' }} />
                  Profilim
                </MenuItem>
                <MenuItem onClick={() => navigate('/orders')}>
                  <ShoppingCartIcon sx={{ color: '#666' }} />
                  Siparişlerim
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { logout(); handleUserClose(); }} sx={{ color: '#FF6600' }}>
                  <LogoutIcon sx={{ color: '#FF6600' }} />
                  Çıkış Yap
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={() => navigate('/login')}>
                  <LoginIcon sx={{ color: '#666' }} />
                  Giriş Yap
                </MenuItem>
                <MenuItem onClick={() => navigate('/register')} sx={{ color: '#FF6600' }}>
                  <PersonAddIcon sx={{ color: '#FF6600' }} />
                  Kayıt Ol
                </MenuItem>
              </>
            )}
          </Menu>

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
            <Badge badgeContent={getCartItemCount()} color="error">
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
            {cart && cart.length > 0 ? (
              <>
                <List sx={{ p: 0 }}>
                  {cart.map((item) => (
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
                    {getCartTotal().toLocaleString("tr-TR")}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleCheckout}
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

export default Navbar;
