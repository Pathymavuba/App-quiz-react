import React from 'react'
import './StartingPage.css'
import Card from './Card'

const StartingPage = ({setShowQuestionPage,setShowStartingPage,topScore,userName,setUserName,}) => {
  const startGame = ()=>{
    if(userName.trim().length>0){
      setShowStartingPage(false)
      setShowQuestionPage(true)
    }
  }
  return (
    <Card>
    <h1 className='header'>Welcome To Quiz Game</h1>
    <h3 className='primary_text'>please enter your username</h3>
    <input type="text" className="user_name"  placeholder='username' 
    value={userName} 
    onChange={(e)=>setUserName(e.target.value)}/>
    <button className="start_btn" onClick={startGame}>let's play</button>
    <p className="top_score">
        Top score : <span>{topScore}</span>
    </p>


</Card>
  )
}

export default StartingPage