import { useState } from "react";
import Card from "./ui/Card";
import FeedbackSurvey from "./FeedbackSurvey";
import ThankYouMessage from "./ThankYouMessage";

export default function FeedbackCard() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [rating, setRating] = useState(0)
    return <Card>
        {
            isSubmitted ?
                <ThankYouMessage rating={rating}/> :
                <FeedbackSurvey rating={rating} setIsSubmitted={setIsSubmitted} setRating={setRating}/>
        }
    </Card>


}