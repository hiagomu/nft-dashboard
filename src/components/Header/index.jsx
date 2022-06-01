import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
import nft from '../../assets/nft-logo.png'
import { Address, Value } from "@emurgo/cardano-serialization-lib-asmjs"
import { AuthContext } from '../../providers/auth'
let Buffer = require('buffer').Buffer

export default function Header() {

    let myWallet = undefined;
    const { user, setUser, balance, setBalance } = React.useContext(AuthContext);

    const enableWallet = async() => {
        try {
            console.log("CONNECTING...")

            myWallet = await window.cardano.ccvault.enable();

            console.log("CONNECTED!")

        } catch (err) {
            console.log(err)
        }
    }

    const getBalance = async() => {
        try {
            const myBalance = await myWallet.getBalance()
            const newBalance = Value.from_bytes(Buffer.from(myBalance, "hex")).coin().to_str();
            setBalance((newBalance / 1000000).toFixed(2));
        } catch (err) {
            console.log(err)
        }
    }

    const getAddress = async() => {
        try {
            const raw = await myWallet.getChangeAddress();
            const userAddress = Address.from_bytes(Buffer.from(raw, "hex")).to_bech32();
            setUser({address: userAddress})
        } catch(err) {
            console.log(err)
        }
    }

    const connectWallet = async() => {
        await enableWallet()
        await getBalance()
        await getAddress()
    }

    return (
        <header>
            <div className='logo'>
                <img src={nft} alt="nft-logo" />
                <p>NTF Dashboard</p>
            </div>
            
            <nav className='nav-menu'>
                <div className='nav-container'>
                    <Link className='link-item' to="/">Home</Link>
                    <Link className='link-item' to="/dashboard">Dashboard</Link>
                    <Link className='link-item' to="/drops">Drops</Link>
                    <Link className='link-item' to="/mint">Mint</Link>
                </div>
    
                <button
                    className='connection-button'
                    onClick={connectWallet}
                >
                        {
                            user.address !== undefined ? (
                                balance + " ADA"
                            ) : (
                                <>
                                    Connect
                                </>
                            )
                        }
                </button>
            </nav>
            
        </header>
    );
}