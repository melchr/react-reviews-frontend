import React from 'react'
import { updateNewReviewForm } from '../../actions/newReviewForm'
import { connect } from 'react-redux'

const NewReviewForm = ({title, content, genre, img_url, updateNewReviewForm}) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateNewReviewForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

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
            name="img_url"
            onChange={handleChange}
            value={img_url}
        />
        <br/>
        <input type="submit" value="Create Review"/>
    </form>
)}

const mapStateToProps = state => {
    const { title, content, genre, img_url } = state.newReviewForm
    return {
        title,
        content,
        genre,
        img_url
    }
}

export default connect(mapStateToProps, { updateNewReviewForm })(NewReviewForm)