import React, { useEffect } from 'react'
import Reviews from '../components/reviews/Reviews'
import { reviewsFetch } from '../actions/reviewsFetch'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReviewsContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reviewsFetch())
    }, [])

const reviews = useSelector(state => state.reviews)
    
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/reviews' render={(routerProps) => <Reviews {...routerProps} reviews={reviews}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default ReviewsContainer