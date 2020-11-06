import React from 'react';
import './App.css';
import ReviewsContainer from './containers/ReviewsContainer';
import ReviewList from './components/reviews/ReviewList'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  render(){
  return (
    <Router>
    <div className="App">
      <Header />
      <button>View All Reviews</button>
      <ReviewsContainer />
      {/* <ReviewList /> */}
      <Route exact path='/app/v1/reviews' component={ReviewList}></Route>
    </div>
    </Router>
  );
  }
}

export default App;
