import React from 'react'
import '../../index.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="video-background">
        <video autoPlay muted loop className="bg-video">
          <source src={require('../../assets/a.mp4')} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="text">Welcome to CRUD System </div>
        <div className="text-2">Choose the Operation</div>
      </div>
    </div>
  );
}

export default Home;