import React from 'react'
import {questions} from '../questions'
import Card from './Card'
import './Questions.css'

const Questions = ({questionIndex,setQuestionIndex,setShowFinalPage,setShowQuestionPage,question,score,setScore,}) => {
  const handleClick = (isCorrect)=>{
    if (questionIndex < 9){
      if(isCorrect){
        setScore((score)=>score +=100)
      }
      setQuestionIndex((preventIndex)=>preventIndex+1)    // setQuestionIndex(questionIndex+1) 
    }
    else {
      if(isCorrect){
        setScore((score)=>score+1)
      } 
      setShowQuestionPage(false)
      setShowFinalPage(true)
    }
  };
  return (
    <Card>
        <h1 className="question">{questions[questionIndex].questionText}</h1>

        <div className="answers">
            {questions[questionIndex].answers.map((answer,index)=>
            <div className='answer' key={index} onClick={()=>handleClick(answer.correctAnswer)}><p>{answer.answerText}</p></div>)}
       </div>

            <p className="score">
                Score: <span>{score}</span>
            </p>
            <p className="question_number">
                Question <span>{questionIndex + 1}</span>/10
            </p>
        
    </Card>
  )
}

export default Questions