import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className="text-light lead">
            Get predictions powered by real-time insights and cutting-edge algorithms.
            Your AI-Powered Investment Companion
            Anticipate trends. Make smarter moves. Grow your portfolio.
            Precision Forecasts for Smarter Trades
            Data-driven predictions to help you stay ahead.
            Predict. Invest. Repeat.
          </p>
          {/* <a className='btn btn-info'href="">Log In</a> */}
          <Button text='LogIn' class='btn-outline-info'/>
        </div>
      </div>
    </>
  )
}

export default Main