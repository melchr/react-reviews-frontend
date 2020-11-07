import React from 'react'

const Review = ({ review }) => {
    return (
        review ?
        <div>
            <h2>{review.attributes.title}</h2>
            <h3>{review.attributes.content}</h3>
            <h5>{review.attributes.genre}</h5>
            <p>{review.attributes.img_url}</p>
        </div>
        : null
    )
}

export default Review