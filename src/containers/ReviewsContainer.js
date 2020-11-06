import React, { Component } from "react";
import { connect } from "react-redux";
import { reviewsFetch } from "../actions/reviewsFetch.js";
//import ReviewCard from "../components/reviews/Reviews";


class ReviewsContainer extends Component {

  componentDidMount() {
    this.props.reviewsFetch();
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews
  };
};

export default connect(
  mapStateToProps,
  { reviewsFetch }
)(ReviewsContainer);