import React from 'react';
import './App.css';
//import reviewsFetch from "./actions/reviewsFetch.js"
import ReviewsContainer from './containers/ReviewsContainer';
import ReviewList from './components/reviews/ReviewList'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    //this.props.reviewsFetch()
  }

  render(){
  return (
    <Router>
    <div className="App">
      <img className="App-logo" src="https://i.ibb.co/fXg9HgB/2-22657-smiley-face-black-and-white-smiley-face-clipart.png" alt="spite-house-smiley"/>
      <h1>SPITE HOUSE</h1>
      <br></br>
      <ReviewsContainer />
      {/* <ReviewList /> */}
      <Route exact path='/app/v1/reviews' component={ReviewList}></Route>
    </div>
    </Router>
  );
  }
}

export default App;
