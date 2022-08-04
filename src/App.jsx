import './index.css'
import StartingPage from './component/StartingPage'
import QuestionPage from './component/QuestionPage'
import FinalPage from './component/FinalPage'
import Questions from './component/Questions'

import { useState } from 'react'

const App = () => {
  const [showStartingPage,setShowStartingPage]=useState(true)
  const [showQuestionPage,setShowQuestionPage]=useState(false)
  const [showFinalPage,setShowFinalPage]=useState(false)

  const [score,setScore]=useState(0)
  const [topScore,setTopScore]=useState(0)

  const [userName,setUserName]=useState("")
  return (
    <div>
      {showStartingPage &&
       <StartingPage 
      showStartingPage={showStartingPage} 
      setShowStartingPage={setShowStartingPage}
      setShowQuestionPage={setShowQuestionPage}
      topScore={topScore} 
      userName={userName}
      setUserName={setUserName}
      />}

      {showQuestionPage &&
       <QuestionPage 
        score={score} 
        setScore={setScore}
        setShowQuestionPage={setShowQuestionPage}
        setShowFinalPage={setShowFinalPage}
        />}
      {showFinalPage &&
       <FinalPage 
        score={score} 
        setScore={setScore}
        topScore={topScore} 
        setTopScore={setTopScore}
        showStartingPage={showStartingPage}
        setShowStartingPage={setShowStartingPage}
        setShowFinalPage={setShowFinalPage}
        userName={userName}
        setUserName={setUserName}
        />}
    
    </div>
  )
}

export default App