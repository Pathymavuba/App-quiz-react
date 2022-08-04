import React from 'react'
import {questions} from '../questions'
import Card from './Card'
import './Questions.css'

const Questions = () => {
  return (
    <Card>
        <h1 className="question">Example question</h1>

        <div className="answers">
            <div className="answer"><p>Answer</p></div>
            <div className="answer"><p>Answer</p></div>
            <div className="answer"><p>Answer</p></div>
            <div className="answer"><p>Answer</p></div>
       </div>

            <p className="score">
                Score: <span>0</span>
            </p>
            <p className="question_number">
                Question <span>1</span>/10
            </p>
        
    </Card>
  )
}

export default Questions