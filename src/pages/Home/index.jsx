import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../../components/Header/index"
import "../Home/home.css"
import Back from '../../components/Back/index'; 
import stars from "../../assets/stars.svg"

export default function Home() {
    
    return (
        <div className="home-container">
                <Back />
                <Header />
                <div className="landing-container">
                    <img src={stars} alt="" />
                    <div>
                        <p>Cardano, Mint NFTs, Explore new collections and Much more!</p>
                        <Link className="explore-button" to="/dashboard">Explore</Link>
                    </div>
                </div>
            </div>
    );
}