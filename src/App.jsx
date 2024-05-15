import { useState } from 'react'
import './App.css'
import questions from './constants/questions.json'
import Question from './components/Question'
import Result from './components/Result'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState(0)

  const handleNextQuestion = (isCorrect)=>{
    setCurrentQuestion(currentQuestion+1)
    if(isCorrect){
      setUserAnswers(userAnswers+1)
    }
  }

  const resetQuiz = ()=>{
    setCurrentQuestion(0)
    setUserAnswers(0)
  }

  return (
    <div>
      {/* heading */}
      <div className='mt-5 flex justify-center px-10 py-4 border-b'>
        <p className='text-4xl font-light me-3'>React Questions</p>
        <button className='bg-green-300 px-3  lg:px-4 lg:py-2 rounded-full text-white'><i className="fa-solid fa-question"></i></button>
      </div>

      {/* questions component */}
      {
        currentQuestion<questions.length&&
        <div>
          <p className='mt-6 text-sm font-bold text-center'>Question. {currentQuestion+1}/{questions.length}</p>
          <Question question={questions[currentQuestion]} handleNextQuestion={handleNextQuestion}/>
        </div>
      }

      {/* results component */}
      {
        currentQuestion===questions.length&&
        <Result userAnswers={userAnswers} resetQuiz={resetQuiz} />
      }

    </div>
  )
}

export default App
