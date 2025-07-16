import React from 'react'

const Button = (props) => {
  return (
    <>
        {/* by default anchor tag refresh the page and we dont want that */}
        {/* we use link component from react routr dom library */}
        <a className={`btn ${props.class}`} href="#">{props.text}</a>
    </>
  )
}

export default Button