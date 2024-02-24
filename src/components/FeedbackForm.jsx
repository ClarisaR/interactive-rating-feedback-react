
import React, { useState } from 'react'
import Rating from './Rating'
import SubmitButton from './SubmitButton'

export default function FeedbackForm({rating, setIsSubmitted, setRating}) {
  
  function handleSubmitForm(e){
    e.preventDefault()
    setIsSubmitted(true)
  }
  return (
    <form className='form' onSubmit={handleSubmitForm}>
        <div className='ratings'>
            <Rating rating={1} setRating={setRating} active={rating==1}/>
            <Rating rating={2} setRating={setRating}  active={rating==2}/>
            <Rating rating={3} setRating={setRating}  active={rating==3}/>
            <Rating rating={4} setRating={setRating} active={rating==4}/>
            <Rating rating={5} setRating={setRating}  active={rating==5}/>
        </div>
        <SubmitButton disabled={!rating}/>
    </form>
  )
}
