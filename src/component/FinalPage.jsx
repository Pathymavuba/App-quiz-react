import React from 'react'
import Card from './Card'
import './FinalPage.css'

const FinalPage = ({
  score,
  setScore,
  topScore,
  setTopScore,
  setShowStartingPage,
  setShowFinalPage,
  userName,
  setUserName}) => {
    const handleClick = ()=>{
     if(score>topScore){
      setTopScore(score)
     }
     setShowStartingPage(true)
     setShowFinalPage(false)
     setScore(0)
     setUserName("")
     
    }
  return (
    <Card>
        <h1 className="heading">You reached at the end of the game,{userName}</h1>

        <h3 className='primary-text'>your final score is :</h3>

        <h3 className="final_score">{score}</h3>
        <button className="play_again_btn" onClick={handleClick}>Play Again</button>

    </Card>
  )
}

export default FinalPage