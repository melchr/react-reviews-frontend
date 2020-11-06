import React from 'react'
import { updateNewReviewForm } from '../../actions/newReviewForm'


const NewReviewForm = () => {

    const handleChange = event => {
        const { name, value } = event.target
        updateNewReviewForm(name, value)
    }

    return (
    <form>
        <input
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={"title"}
        /><br/>
        <input
            placeholder="Content"
            name="content"
            onChange={handleChange}
            value={"content"}
        /><br/>
        <input
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            value={"genre"}
        /><br/>
        <input
            placeholder="Album Cover URL"
            name="img_url"
            onChange={handleChange}
            value={"img_url"}
        />
    </form>
)}

export default NewReviewForm