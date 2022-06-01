import React from 'react'
import '../Card/card.css'

export default function Card({title, image}) {
    return (
        <div className='container-card'>
            <ul>
                <li>
                    <img src={image} alt="Project NFT" className='project-nft'/>
                    <p className='project-name'>{title}</p>
                </li>
            </ul>
        </div>
    );
}