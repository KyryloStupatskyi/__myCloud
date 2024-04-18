import React from "react";
import '../styles/home.scss'
import { Box, Button, Container, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const nav = ["Home", "About", "Payment"]
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div className="homePage">
      <div className="overlay" />
      <Container maxWidth="xl" sx={{ padding: '20px', position: 'relative' }}>
        <Box sx={{ flexGrow: 1, display: "flex", paddingBottom: "10px" }}>
          {nav.map((item) => (
            <Button
              key={item}
              className="btn"
            >
              {item}
            </Button>
          ))}

          <Box sx={{ marginLeft: 'auto' }} display={"flex"}>
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
          <Typography className="txt" variant="h2">Free to use cloud storage</Typography>
          <Button className="title-btn">Join us now</Button>
        </div>

        <Carousel className="carousel" interval={8000} >
          <Carousel.Item style={{ height: '300px', padding: '20px', }}>
            <div className="h-50 d-flex justify-content-around">
              <img src={process.env.REACT_APP_API_URL + 'assets/axios.png'} alt="loading" />
              <img src={process.env.REACT_APP_API_URL + 'assets/mobx.png'} alt="loading" />
              <img src={process.env.REACT_APP_API_URL + 'assets/react.png'} alt="loading" />
            </div>
            <Carousel.Caption>
              <h5>Main Technologies Used for Creating FrontEnd</h5>
              <p>Axios - MobX - React</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: '300px', padding: '20px' }}>
            <div className="h-50 d-flex justify-content-around">
              <img src={process.env.REACT_APP_API_URL + 'assets/nodejs.png'} alt="loading" />
              <img src={process.env.REACT_APP_API_URL + 'assets/posgresql.png'} alt="loading" />
              <img src={process.env.REACT_APP_API_URL + 'assets/sequelize.png'} alt="loading" />
            </div>
            <Carousel.Caption>
              <h5>Main Technologies Used for Creating BackEnd</h5>
              <p>NodeJS - PosgreSQL - Sequelize</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    </div >
  )
}
export default Home