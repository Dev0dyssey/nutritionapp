import React from 'react';
import Moment from 'moment';
import unsplash from '../api/unsplash';
import mealdatabase from '../api/mealdatabase';
import CaptureForm from './CaptureForm';
import Card from './Card';
import MealDetail from './MealDetail';
import ListFeatures from './ListFeatures';

import {connect} from 'react-redux';

//COMPONENT TO CAPTURE DATA AND SHOW BACK TO THE USER
class MealCapture extends React.Component {
    state = {
        meal: '',
        calories: '',
        image: [],
        selectedMeal: '',
        selectedName: '',
        showComponent: 'none',
        urls: '',
        nutrition: []
    }

    // ASYNC FUNCTION TO CAPTURE API CALL RESPONSE AS WELL AS TO SET STATE WITH THE VALUE THAT WAS PROVIDED BYT THE <CAPTUREFORM /> ELEMENT
    onSubmit = async (value1, value2) => {
        // MOVE PARTS OF THE AXIOS CODE INTO A SEPARATE API DIRECTORY AND FILE, TO CREATE A CUSTOM AXIOS CLIENT
        const response = await unsplash.get('/search/photos', {
            params: {query: value1}
        });

        this.setState({meal: value1});
        this.setState({calories: value2});
        this.setState({image: response.data.results});
    }

    mealData = async (term) => {
        const answer = await mealdatabase.get(`${term}&app_id=d0c3cf36&app_key=11cf8167af78fde44896a9793debed00`);
        this.setState({nutrition: answer.data.hints});

        console.log(this.state.nutrition);
    }

    mealDetail = (meal, name, urls) => {
        this.setState({
            selectedMeal: meal,
            selectedName: name,
            showComponent: '',
            urls: urls
        });

    }

    render() {
    // DISPLAY OF THE CAPTURE FORM, MEAL RESULTS AND THE CARD HOLDING THE MEAL SUMMARY
    // MAPPING OVER NUTRITION INFORMATION TO GET THE DATA NEEDED, SHOWING ONLY THE FIRST SET OF RESULTS USING SLIC()
    const info = this.state.nutrition.slice(0,1).map((item) =>
        // JSX FRAGMENT TO REDUCE THE AMOUNT O <DIV> USED
        <>
            <div>Calories: {item.food.nutrients.ENERC_KCAL}</div>
            <div>Fat: {item.food.nutrients.FAT}%</div>
            <div>Carbs: {item.food.nutrients.CHOCDF}%</div>
        </>
    );

    return(   
            <div className="ui container" style={{textAlign: 'center', marginTop: '10px'}}>
                <h1 className="main">MEAL CALORIE APP</h1>
                <h3 className="main">Current user: {this.props.user}</h3>
                {/* ADDED MOMENT LIBRARY TO HELP WITH TIME CAPTURE AND DISPLAY */}
                <p className="main">Date: {Moment().format('MMMM Do YYYY')}</p>
                {/* RENDER THE CAPTURE FORM COMPONENT */}
                <CaptureForm 
                    onSubmit = {this.onSubmit}
                />
                <div style={{marginTop: '10px', color: 'white'}}>
                YOUR MEALS:
                    <br />
                    <span id="Meal">{this.state.meal} {this.state.calories}kcal</span>
                </div>

                <MealDetail
                    detail = {this.state.selectedMeal}
                    mealName = {this.state.selectedName}
                    showComponent = {this.state.showComponent}
                    urls = {this.state.urls}
                    nutrition = {info}
                />

                <Card 
                    meal = {this.state.meal}
                    calories = {this.state.calories}
                    images = {this.state.image}
                    mealDetail = {this.mealDetail}
                    mealData = {this.mealData}
                />
            </div>  
        )
    };
}

const mapStateToProps = (state)  => {
    return ({mealName: state.mealName })
}

export default connect(mapStateToProps)(MealCapture);