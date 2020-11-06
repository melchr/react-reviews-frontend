export default function reviewReducer (state = {reviews: [], comments: []}, action) {
    switch (action.type) {
        case "GET_REVIEWS":
            return {...state, reviews: action.reviews}
        default:
            return state
    }
}

//if only reducer, it needs to return as an object, not an array