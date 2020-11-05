import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Reviews extends Component {
    renderReviews() {
        return this.props.reviews.map((review) => {
            return (
                <div key={review.id}>
                    <h1>REVIEW</h1>
                    <Link to={`/reviews/${review.id}`}><h2>{review.attributes.title}</h2></Link>
                    <h3>{review.attributes.content}</h3>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                {this.renderReviews()}
            </div>
        )
    }
}

export default Reviews