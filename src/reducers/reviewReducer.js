export default function reviewReducer(state = {reviews: {}}, action) {
    switch (action.type) {
        case 'REVIEWS_FETCH':
            return { reviews: action.payload }
        default:
            return state
    }
}