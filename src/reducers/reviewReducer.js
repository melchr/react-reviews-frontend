export default function reviewReducer (state = {reviews: [], comments: []}, action) {
    switch (action.type) {
        case 'REVIEWS_FETCH':
            return {...state, reviews: action.payload}
        default:
            return state
    }
}

//if only reducer, it needs to return as an object, not an array