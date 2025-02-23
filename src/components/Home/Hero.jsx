import { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80",
      title: "Yeni Koleksiyon",
      description: "2024 Sezonu",
      buttonText: "Keşfet",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80",
      title: "İndirim",
      description: "%50'ye Varan",
      buttonText: "İncele",
      overlayColor: "rgba(0, 0, 0, 0.5)"
    },
    {
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80",
      title: "Aksesuarlar",
      description: "Yeni Gelenler",
      buttonText: "Tümü",
      overlayColor: "rgba(0, 0, 0, 0.3)"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        maxWidth: { xl: '1920px' },
        mt: 0,
        mb: { xs: 3, sm: 4 },
        position: 'relative',
        px: { xs: 0, sm: 0, md: 0 }
      }}
    >
      <Box
        sx={{
          height: { 
            xs: "300px",
            sm: "400px",
            md: "500px",
            lg: "600px",
          },
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 0, sm: 0 },
        }}
      >
        {/* Slider görüntüsü ve overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 35%",
            backgroundRepeat: "no-repeat",
            transition: "all 1s ease-in-out",
            transform: "scale(1.02)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(
                to bottom,
                ${slides[currentSlide].overlayColor} 0%,
                rgba(0,0,0,0.4) 50%
              )`,
              transition: "all 0.8s ease-in-out",
            }
          }}
        />

        {/* İçerik */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            px: { 
              xs: 3,
              sm: 6, 
              md: 8,
              lg: 12 
            },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              width: "50%",
              height: "50%",
              background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 1
            }
          }}
        >
          <Box 
            sx={{ 
              maxWidth: { xs: "100%", sm: 500, md: 600 },
              position: "relative",
              zIndex: 2,
              ml: { xs: 0, sm: 2, md: 4 },
              mt: { xs: -2, sm: 0 }
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { 
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem"
                },
                fontWeight: 600,
                color: "white",
                letterSpacing: "-0.5px",
                mb: { xs: 1, sm: 1.5 },
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                animation: "fadeIn 0.8s ease-in-out",
              }}
            >
              {slides[currentSlide].title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                mb: { xs: 2, sm: 3 },
                fontSize: { 
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.5rem" 
                },
                fontWeight: 300,
                opacity: 0.9,
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                animation: "fadeIn 0.8s ease-in-out 0.2s",
              }}
            >
              {slides[currentSlide].description}
            </Typography>

            {/* Slider göstergeleri */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 2 },
                mb: { xs: 2, sm: 3 }
              }}
            >
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  role="button"
                  aria-label={`Slide ${index + 1}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setCurrentSlide(index);
                    }
                  }}
                  sx={{
                    width: { xs: 20, sm: 25 },
                    height: { xs: 2, sm: 3 },
                    bgcolor: currentSlide === index ? "white" : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "black",
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                borderRadius: "4px",
                textTransform: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.9)",
                  transform: "translateY(-2px)",
                },
                animation: "fadeIn 0.8s ease-in-out 0.4s",
              }}
            >
              {slides[currentSlide].buttonText}
            </Button>
          </Box>
        </Box>
      </Box>

      <style>
        {`
          @keyframes fadeIn {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Container>
  );
}