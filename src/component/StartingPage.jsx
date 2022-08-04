import React from 'react'
import './StartingPage.css'
import Card from './Card'

const StartingPage = () => {
  return (
    <Card>
    <h1 className='header'>Welcome To Quiz Game</h1>
    <h3 className='primary_text'>please enter your username</h3>
    <input type="text" className="user_name"  placeholder='username'/>
    <button className="start_btn">let's play</button>
    <p className="top_score">
        Top score : <span>0</span>
    </p>


</Card>
  )
}

export default StartingPage