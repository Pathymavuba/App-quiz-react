import React from 'react'
import './QuestionPage.css'
import {questions} from '../questions'
import Questions from './Questions'
import { useState } from 'react'

const QuestionPage = ({setShowFinalPage,setShowQuestionPage,score,setScore}) => {
  const [questionIndex,setQuestionIndex]= useState(0)

  return (
    <Questions 
    questionIndex={questionIndex} 
    questions={questions} 
    setQuestionIndex={setQuestionIndex}
    setShowQuestionPage={setShowQuestionPage}
    setShowFinalPage = {setShowFinalPage}
    score={score}
    setScore={setScore}
    />
  )
}

export default QuestionPage