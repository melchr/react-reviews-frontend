export const getReviews = reviews => {
    return {
        type: "GET_REVIEWS",
        reviews
    }
} //action creator


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