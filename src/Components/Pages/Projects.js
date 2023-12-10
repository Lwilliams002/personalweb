import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import './Projects.css';

const projects = [
  {
    title: 'EcoSpotter',
      image: 'https://github.com/Lwilliams002/personalweb/blob/master/public/eco.png?raw=true',
    path: 'https://github.com/Lwilliams002/EcoSpotter',
      website: 'https://github.com/Lwilliams002/EcoSpotter/assets/82903572/66d5918a-ccde-429f-9c7a-57ba04ff4749',
  },
  {
    title: 'Stockboard',
      image: 'https://user-images.githubusercontent.com/82903572/234873395-276124a3-1607-44a0-b0c2-0fccd570af7b.png',
    path: 'https://github.com/Lwilliams002/Stockboard',
      website: 'https://lwilliams002.github.io/Stockboard/',
  },
  

];

function Projects() {
const handleProjectClick = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      <h1 className="h1-tag">Portfolio</h1>
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} className="project-card">
              <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid >
                  <img
                    src={project.image}
                    alt={project.title}
                    height="100"
                    className="card-img"
                    style={{  width: '100%', height: '100%', objectFit: 'cover'  }}
                  />
                </Grid>
                <Grid  style={{  display: 'flex', flexDirection: 'column', margin: "0 auto"}}>
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
                      sx={{ marginTop: '1rem' }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<LanguageIcon />}
                      onClick={() => handleProjectClick(project.website)}
                      sx={{ marginTop: '1rem', }}
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