import React from 'react';
import './App.css';
import ReviewsContainer from './containers/ReviewsContainer';
import ReviewList from './components/reviews/ReviewList'
import NewReviewForm from './components/reviews/NewReviewForm'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  render(){
  return (
    <Router>
    <div className="App">
      <Header />
      <Link to="/">Home</Link> |
      <Link to="/app/v1/reviews">View All Reviews</Link> | 
      <Link to="/app/v1/reviews/new">New Review</Link>
      <ReviewsContainer />
      <Route exact path='/app/v1/reviews' component={ReviewList}></Route>
      <Route exact path='/app/v1/reviews/new' component={NewReviewForm}/>
    </div>
    </Router>
  );
  }
}

export default App;
