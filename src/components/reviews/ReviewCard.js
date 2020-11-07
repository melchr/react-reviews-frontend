import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div>
    <p><strong>{review.attributes.title}</strong></p>
    {/* <p>{review.attributes.content}</p> */}
    <br></br>
    </div>
  )
}

export default ReviewCard