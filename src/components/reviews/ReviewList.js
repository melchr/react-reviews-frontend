import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ReviewList = props => {
  const reviewCards = props.reviews.length > 0 ?
    props.reviews.map(r => (
    <div>
    <br></br>
      <p key={r.id}><Link className="App-link" to={`/app/v1/reviews/${r.id}`}>{r.attributes.title}</Link>
      </p>
    </div>)) :
    null


  return reviewCards
}
//mapstatetoprops tells redux to provide access to its state
//so we may pick and choose the pieces of state we would like available
//to this particular component as props
const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews
  }
}

export default connect(mapStateToProps)(ReviewList)