import React from 'react'
// import Board from './Board'

const Square = (props) => {

  return (
    <>

        <button className='square' onClick={props.onSquareClick}>{props.value}</button>

    </>
  )
}

export default Square
