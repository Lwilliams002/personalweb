import React from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Stockboard',
    image: 'https://user-images.githubusercontent.com/82903572/234044608-ff620d58-77e2-4db5-9dc3-718109182957.png',
    path: 'https://lwilliams002.github.io/Stockboard/',
  },

];

function Frontpage() {
  const navigate = useNavigate();

  return (
    <div>
      <Typography
        component="h1"
        variant="h4"
        textAlign="center"
        sx={{ marginTop: '1rem', marginBottom: '2rem' }}
        color={"white"}
      >
        My Projects
      </Typography>
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(project.path)}>
                  <CardMedia
                    sx={{
                      height: 0,
                      paddingTop: '56.25%', // 16:9
                    }}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Frontpage;
