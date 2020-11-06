import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div>
    <p>{review.attributes.title}</p>
    <p>{review.attributes.content}</p>
    </div>
  )
}

export default ReviewCard