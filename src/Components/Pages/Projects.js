import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import './Projects.css';

const projects = [
  {
    title: 'Stockboard',
      image: 'https://user-images.githubusercontent.com/82903572/234873395-276124a3-1607-44a0-b0c2-0fccd570af7b.png',
    path: 'https://github.com/Lwilliams002/Stockboard',
      website: 'https://lwilliams002.github.io/Stockboard/',
  },
    {
      title: 'Expense Tracker',
      image: "https://github.com/Lwilliams002/Expense-Tracker/blob/master/img.png?raw=true",
      path: 'https://github.com/Lwilliams002/Expense-Tracker',
        website: 'https://github.com/Lwilliams002/Expense-Tracker',
    },

];

function Projects() {
const handleProjectClick = (url) => {
    window.location.href = url;
  };
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
            <Grid item xs={12} sm={6} lg={4} key={index} className="project-card">
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <img
                    src={project.image}
                    alt={project.title}
                    height="100"
                    className="card-img"
                    style={{  width: '100%', height: 'auto', objectFit: 'cover'  }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" component="h2" textAlign="center" style={{marginBottom: '1rem'}}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {project.description}
                  </Typography>
                  <Grid container justifyContent="center" alignItems="flex-end" sx={{ marginTop: '1rem' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      onClick={() => handleProjectClick(project.path)}
                      sx={{ marginTop: '1rem', marginRight: '1rem' }}
                    >
                      GitHub Repo
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<LanguageIcon />}
                      onClick={() => handleProjectClick(project.website)}
                      sx={{ marginTop: '1rem' }}
                    >
                      Live Demo
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;
