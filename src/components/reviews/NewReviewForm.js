import React from 'react'
import { updateNewReviewForm } from '../../actions/newReviewForm'
import { connect } from 'react-redux'

const NewReviewForm = () => {

    const handleChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        updateNewReviewForm(name, value)
    }

    return (
    <form>
        <input
            placeholder="Title"
            name="title"
            onChange={handleChange}
            //value={""}
        /><br/>
        <input
            placeholder="Content"
            name="content"
            onChange={handleChange}
            //value={""}
        /><br/>
        <input
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            //value={""}
        /><br/>
        <input
            placeholder="Album Cover URL"
            name="img_url"
            onChange={handleChange}
            //value={""}
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