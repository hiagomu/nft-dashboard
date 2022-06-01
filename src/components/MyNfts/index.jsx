import React, { useState, useEffect } from 'react'
import { AuthContext } from '../../providers/auth';
import Card from '../Card/index'
import '../MyNfts/mynfts.css'

export default function MyNfts() {

    const [projects, setProjects] = useState([]);
    const { user } = React.useContext(AuthContext)
    
    useEffect(() => {
        if (user.address !== undefined) {
            fetch(`https://pool.pm/wallet/${user.address}`).
            then(response => response.json()).
            then(data => setProjects(data.tokens))
        }
    }, [user])

    return(
        <>
            <div className='section-title'>
                <h1>My Cardano NFTs</h1>
            </div>
            <div className='trend-container'>
                
                {
                projects.map(project => {
                    return (
                        <Card title={project.name} image={`https://ipfs.io/ipfs/${project.metadata.image.slice(7)}`}/>
                    );
                })
                }
            </div>
        </>
    );
}