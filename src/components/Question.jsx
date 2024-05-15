import React from 'react'

const Question = ({question, handleNextQuestion}) => {
  return (
    <div className='mt-4'>
        <p className='text-center text-2xl font-light'>{question.question}</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-8'>
            {
                question.answerOptions.map((option,index)=>(
                    <button onClick={()=>handleNextQuestion(option.isCorrect)} key={index} className='p-6 border rounded-xl hover:bg-green-100'>
                        <p>{option.text}</p>
                    </button>
                ))
            }
            
        </div>
    </div>
  )
}

export default Question