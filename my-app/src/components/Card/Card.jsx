import React from 'react'
import '../../Assets/css/card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <p className='title'>{props.title}</p>
      <p>{props.job}</p>
    </div>
  )
}

export default Card ;