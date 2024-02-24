
import React from 'react'

export default function ThankYouMessage({ rating = 0 }) {
    return (
        <div className='thank-you-message'>
            <img src="/illustration-thank-you.svg" alt="Thank you image" /><br/>
            <span className='pill'>You selected {rating} out of 5</span>
            <h2 className='header'>Thank you!</h2>
            <p className='description'>We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</p>
        </div>
    )
}
