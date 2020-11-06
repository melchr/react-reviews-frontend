import React from 'react'
import { updateNewReviewForm } from '../../actions/newReviewForm'
import { createReview } from '../../actions/reviewsFetch'
import { connect } from 'react-redux'

const NewReviewForm = ({ formData, updateNewReviewForm, createReview }) => {
    const {title, content, genre, imgUrl} = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateNewReviewForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createReview({
            ...formData
        })
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={title}
        /><br/>
        <input
            placeholder="Content"
            name="content"
            onChange={handleChange}
            value={content}
        /><br/>
        <input
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            value={genre}
        /><br/>
        <input
            placeholder="Album Cover URL"
            name="imgUrl"
            onChange={handleChange}
            value={imgUrl}
        />
        <br/>
        <input type="submit" value="Create Review"/>
    </form>
)}

const mapStateToProps = state => {
    return {
        formData: state.newReviewForm
    }
}

export default connect(mapStateToProps, { updateNewReviewForm, createReview })(NewReviewForm)