import React from 'react'

const NewReviewForm = () => {
    const handleChange=()=>{}
    return (
    <form>
        <input
            name="title"
            onChange={handleChange}
            value={"title"}
        />
        <input
            name="content"
            onChange={handleChange}
            value={"content"}
        />
        <input
            name="genre"
            onChange={handleChange}
            value={"genre"}
        />
        <input
            name="img_url"
            onChange={handleChange}
            value={"img_url"}
        />
    </form>
)}

export default NewReviewForm