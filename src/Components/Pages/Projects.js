import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import "./Projects.css";

const projects = [
  {
    title: 'Stockboard',
    image: 'https://user-images.githubusercontent.com/82903572/234044608-ff620d58-77e2-4db5-9dc3-718109182957.png',
    path: 'https://lwilliams002.github.io/Stockboard/',
  },
    {
      title: 'Expense Tracker',
      image: "https://github.com/Lwilliams002/Expense-Tracker/blob/master/OIG.jpg?raw=true",
      path: 'https://lwilliams002.github.io/Stockboard/',
    },

];
const handleClick = () => {
    window.location.href = "https://lwilliams002.github.io/Stockboard/";
  };

function Frontpage() {

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
            <Grid item xs={12} sm={6} md={4} key={index} className="project-card">
              <div
                onClick={handleClick}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  height="200"
                  className="card-img"
                />
                <p className="card-text">{project.title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Frontpage;
