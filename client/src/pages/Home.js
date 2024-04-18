import React from "react";
import '../styles/home.scss'
import { Box, Button, Container, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Carousel from 'react-bootstrap/Carousel';
import { technologies } from "../utils/carouselTechnologies";

const Home = () => {
  const nav = ["Home", "About", "Payment"]
  return (
    <div className="homePage">
      <div className="overlay" />
      <Container maxWidth="xl" sx={{ padding: '20px', position: 'relative' }}>
        <Box sx={{ flexGrow: 1, display: "flex", paddingBottom: "10px" }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {nav.map((item) => (
              <Button
                key={item}
                className="btn"
              >
                {item}
              </Button>
            ))}
          </div>

          <Box sx={{ marginLeft: 'auto', gap: "10px" }} display={"flex"}>
            <div className="search-wrapper">
              <SearchIcon sx={{ color: '#c8c3c3', fontSize: '22px' }} className="search-icon" />
              <input type="text" className="search-input" disabled />
            </div>

            <div className="auth">
              <Button className="btn">Login</Button>
              <Button className="btn">Logout</Button>
            </div>
          </Box>
        </Box>

        <div className="title-wrapper">
          <Typography className="title" variant="h2">Free to use cloud storage</Typography>
          <Button className="title-btn">Join us now</Button>
        </div>

        <Carousel className="carousel" interval={8000} >
          {technologies.map(({ id, imagesRoutes, slideTitle, stack }) => (
            <Carousel.Item key={id} style={{ height: '300px', padding: '20px', }}>
              <div className="h-50 d-flex justify-content-around">
                {imagesRoutes.map(route => (
                  <img key={route} src={process.env.REACT_APP_API_URL + route} alt="loading" />
                ))}
              </div>
              <Carousel.Caption>
                <h5>{slideTitle}</h5>
                <p>{stack}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

    </div >
  )
}
export default Home