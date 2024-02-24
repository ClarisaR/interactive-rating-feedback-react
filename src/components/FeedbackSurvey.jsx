
import React from 'react'
import FeedbackDescription from './FeedbackDescription'
import FeedbackForm from './FeedbackForm'

export default function FeedbackSurvey({rating, setIsSubmitted, setRating}) {
  return (
    <div>
        <FeedbackDescription />
        <FeedbackForm rating={rating} setIsSubmitted={setIsSubmitted} setRating={setRating}/>
    </div>
  )
}
