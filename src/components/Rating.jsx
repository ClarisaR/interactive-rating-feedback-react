
import React from 'react'

export default function Rating({rating, setRating, active=false}) {

  function handleClick(){
    setRating(rating)
  }

  return (
    <span className={`rating ${active && 'rating-active'}`} onClick={handleClick} >{rating}</span>
  )
}
