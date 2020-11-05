export const reviewsFetch = () => {
    console.log("been fetched")
    return dispatch => {
        fetch('http://localhost:3000/api/v1/reviews', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(reviews => dispatch ({
            type: 'REVIEWS_FETCH',
            payload: reviews.data
        }))
    }
}