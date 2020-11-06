export const getReviews = reviews => {
    return {
        type: "GET_REVIEWS",
        reviews
    }
} //action creator

export const addReview = review => {
    return {
        type: "ADD_REVIEW",
        review
    }
}


export const reviewsFetch = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/reviews', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(reviews => dispatch (getReviews(reviews.data)))
    }
}

export const createReview = reviewData => {
    return dispatch => {
        const sendableReviewData = {
            review: {
                title: reviewData.title,
                content: reviewData.content,
                genre: reviewData.content,
                img_url: reviewData.imgUrl
            }
        }
        return fetch("http://localhost:3000/api/v1/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableReviewData)
        })
            .then(response => response.json())
            .then(console.log)
    }
}