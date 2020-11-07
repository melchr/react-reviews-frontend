//sync actions

export const updateNewReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM",
        formData: { name, value }

    }
}

export const resetNewReviewForm = () => {
    return {
        type: "RESET_NEW_REVIEW_FORM"
    }
}