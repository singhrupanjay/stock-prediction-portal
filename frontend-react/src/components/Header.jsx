import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href="">StockPrediction</a>

        <div>
          <Button text='LogIn' class='btn-outline-info'/>
          &nbsp;
          <Button text='Register' class='btn-info'/>
          {/* <a className='btn btn-info'href="">Register</a> */}
        </div>
    </nav>
    </>
  )
}

export default Header