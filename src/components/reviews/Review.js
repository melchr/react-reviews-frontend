import React from 'react'

const Review = ({ review }) => {
    return (
        review ?
        <div className="review">
            <br></br><br></br><br></br>
            <h2>{review.attributes.title}</h2>
            <p><img src={review.attributes.img_url}></img></p>
            <h5>Genre: {review.attributes.genre}</h5>
            <h4>{review.attributes.content}</h4>
            <br></br><br></br><br></br><br></br>
        </div>
        : null
    )
}

export default Review