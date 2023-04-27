import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import "./Projects.css";

const projects = [
  {
    title: 'Stockboard',
    image: 'https://user-images.githubusercontent.com/82903572/234873395-276124a3-1607-44a0-b0c2-0fccd570af7b.png',
    path: 'https://lwilliams002.github.io/Stockboard/',
  },
    {
      title: 'Expense Tracker',
      image: "https://github.com/Lwilliams002/Expense-Tracker/blob/master/img.png?raw=true",
      path: 'https://github.com/Lwilliams002/Expense-Tracker',
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
                  style={{ width: '100%', objectFit: 'cover' }}
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
