const initialState = {
    title: "",
    content: "",
    genre: "",
    img_url: "",
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_REVIEW_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_REVIEW_FORM":
            return initialState
        default:
            return state
    }
}