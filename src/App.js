import React from 'react';
import './App.css';
import ReviewsContainer from './containers/ReviewsContainer';
import ReviewList from './components/reviews/ReviewList'
import NewReviewForm from './components/reviews/NewReviewForm'
import Review from './components/reviews/Review'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class App extends React.Component {

  render(){
    const { reviews } = this.props
  return (
    <div className="App">
      <Header />
      <ReviewsContainer />
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/app/v1/reviews' component={ReviewList}></Route>
      <Route exact path='/app/v1/reviews/new' component={NewReviewForm}/>
      <Route exact path='/app/v1/reviews/:id' render={props => {
        const review = reviews.find(review => review.id === props.match.params.id )
          return <Review review={review} {...props}/>
        }
      }/>
      </Switch>
      <br></br>
      <Footer />
    </div>
  );
  }
}

const mapStateToProps = state => {
  return ({
    reviews: state.reviews.reviews
  })
}

export default withRouter(connect(mapStateToProps)(App))
