import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import "../Home/home.css"
import BackgroundParticles from '../../components/BackgroundParticles/index'; 
import stars from "../../assets/stars.svg"

export default function Home() {
    
    return (
        <div className="home-container">
                <BackgroundParticles />
                <Header />
                <div className="landing-container">
                    <img src={stars} alt="" />
                    <div>
                        <p>Cardano, Mint NFTs, Explore new collections and Much more!</p>
                        <Link className="explore-button" to="/dashboard">Explore</Link>
                    </div>
                </div>
                <Footer />
            </div>
    );
}