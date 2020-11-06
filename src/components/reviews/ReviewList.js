import React from 'react'
import ReviewCard from './ReviewCard'
import { connect } from 'react-redux'

const ReviewList = props => {
    const reviewCards = props?.reviews?.map?.(r => <ReviewCard review={r}/>)
  return (
      reviewCards.length > 0 ? reviewCards : null
  )
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