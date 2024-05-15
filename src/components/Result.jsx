import React from 'react'

const Result = ({userAnswers,resetQuiz}) => {
  return (
    <div className='w-full flex flex-col items-center mt-5'>
        <p className=' text-2xl font-light text-green-600'>Results</p>
        <p className='mt-4 text-2xl font-light'>You got <span className='font-bold text-green-600'>{userAnswers}</span> out of 10 Questions correct  </p>
        <button onClick={resetQuiz} className='w-44 mt-5 bg-slate-200 p-2 text-slate-700 rounded-2xl text-lg'>Reset Quiz</button>
    </div>
  )
}

export default Result