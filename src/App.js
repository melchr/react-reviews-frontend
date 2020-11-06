import React from 'react';
import './App.css';
//import reviewsFetch from "./actions/reviewsFetch.js"
import ReviewsContainer from './containers/ReviewsContainer';
import ReviewList from './components/reviews/ReviewList'
//import ReviewCard from './components/reviews/ReviewCard'

class App extends React.Component {
  componentDidMount() {
    //this.props.reviewsFetch()
  }

  render(){
  return (
    <div className="App">
      <img className="App-logo" src="https://i.ibb.co/fXg9HgB/2-22657-smiley-face-black-and-white-smiley-face-clipart.png" alt="spite-house-smiley"/>
      <h1>SPITE HOUSE</h1>
      <br></br>
      <ReviewsContainer />
      <ReviewList />
    </div>
  );
  }
}

export default App;
