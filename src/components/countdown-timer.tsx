import React from 'react'

const CountDownTimer = ({timeLeft} : {timeLeft: number}) => {
  return (
    <h2 className='text-primary-400 font-medium'>Time: {timeLeft}</h2>
  )
}

export default CountDownTimer