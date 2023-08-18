import React from 'react'
import myLogo from '../logo.svg'

const Home = () => {
    return (
        <div style={{backgroundImage:`url("abc.jpg")`, backgroundSize: 'cover',
        minHeight: "100vh"}}>
            <h1>Welcome to HomePage</h1>
            <h1 className='myclass'>my react app</h1>
            <h2 style={{color:'green', fontSize: 30}}> Inline CSS</h2>
            <img src="/logo192.png" alt="" />
            <img src={myLogo} alt="" />
        </div>
    );
}

export default Home;