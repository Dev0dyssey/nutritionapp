import React from 'react';
import Moment from 'moment';
import Comment from './Comment';

class CardDisplay extends React.Component {
    // STATE DECLARATION FOR THE COMPONENT, ESPECIALLY FOR THE COMMENTS
    state = {
        comment: ''
    };

    // ADDING THE COMMENT VALUE TO BE SHOWN TO THE USER
    addComment = (term) => {
        this.setState({comment: term});
    }

    render(){
        const {alt_description, id, urls} = this.props.image;
        const {meal, calories,mealDetail, mealData} = this.props;

        return(
            // CARD ELEMENT FROM THE SEMANTIC UI
            <div className="ui card">
                <div className="image" onClick={() => {
                        mealDetail(alt_description, meal, urls);
                        mealData(meal);
                    }}>
                    <img className="image" alt={alt_description} key={id} src={urls.regular} />
                </div>

                <div className="content">
                    <span className="header" href="#">{meal}</span>
                    <div className="meta">
                        <span className="date">Added {Moment().format('MMMM Do YYYY')}</span>
                    </div>

                </div>
                {/* ADDED A NEW COMPONENT FOR THE COMMENTS THAT IS PLACED WITHIN THE CARD. CAN BE TAKEN OUT AND REUSED ELSEWEHERE */}
                {/* ADDCOMMENT PROP TO GATHER COMMENT VALUE AND DISPLAY TO USER */}

                <Comment addComment = {this.addComment} />
                
                <div className="extra content">
                    <div>
                        <i className="utensils icon"></i>
                            Calories: {calories}
                    </div>
                    <div>
                        Comments: {this.state.comment}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardDisplay;