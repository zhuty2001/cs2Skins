import React from 'react';
import { Container, Grid, Card, CardContent, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 创建暗色主题
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4655', // CS2/Valorant风格的红色
    },
    background: {
      default: '#1f2326',
      paper: '#2f3136',
    },
  },
});

// 模拟的饰品数据
const skins = [
  {
    id: 1,
    name: 'AK-47 | Asiimov',
    wear: 'Factory New',
    price: 150.50,
    trend: '+5.2%',
    image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_1fvw-_ghcK4tZzJnyFn7HNw-z-DyiPb7Msy'
  },
  {
    id: 2,
    name: 'M4A4 | Howl',
    wear: 'Minimal Wear',
    price: 3500.00,
    trend: '-2.1%',
    image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-vloWZh-L6OITck29Y_cg_0rrEpdyg3Qzj_hA6a2H0cYeSIVA5ZV2E81e9xO-90JLq6Z_BnXs1uT5iuyjbExSs1A'
  },
  {
    id: 3,
    name: 'AWP | Dragon Lore',
    wear: 'Field-Tested',
    price: 10000.00,
    trend: '+1.5%',
    image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMyoD0mlOx5UI4YDzwJYOVdQNoYVHS_1m7w-brhZG87c7OzXE1siN3sSmLlxG20B1Lae1rm7XAHvqFh7j6'
  },
  {
    id: 4,
    name: 'Butterfly Knife | Fade',
    wear: 'Factory New',
    price: 2500.00,
    trend: '+3.7%',
    image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeyQyoD8j1yg5RVtMmCmctOWJlI-YwyD_VG8w-nohsPt78zKz3Zhsygq4HnczEHk0k5SLrs4Un2yL0k'
  }
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* 顶部导航栏 */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CS2 Skins Market
            </Typography>
          </Toolbar>
        </AppBar>

        {/* 主要内容区域 */}
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {skins.map((skin) => (
              <Grid item xs={12} sm={6} md={3} key={skin.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      pt: '56.25%', // 16:9 宽高比
                      position: 'relative',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Box
                      component="img"
                      src={skin.image}
                      alt={skin.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                      {skin.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skin.wear}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      ${skin.price.toLocaleString()}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color={skin.trend.startsWith('+') ? 'success.main' : 'error.main'}
                    >
                      {skin.trend} (24h)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
