import React from 'react';

import {connect} from 'react-redux';
import {captureMeal} from './Actions';


class CaptureForm extends React.Component {
    state = {
        meal: '', 
        cal: '',
        result: ''
    }

    // ONCLICK CODE TO INTERACT WHEN A BUTTON IS CLICKED AND DISPLAY MEAL DATA INFORMATION
    onButtonClick() {
        this.props.onSubmit(this.state.meal, this.state.cal);
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log("Hello");
    }
    
    // LOGICAL CONDITIONING PLACED INTO A SEPARATE FUNCTION TO BE REFERENCED WITHIN THE RENDER() METHOD
    logic_Help() {
        return this.state.cal >= 500 ? console.log('One third of your intake consumed') : console.log('Carry on')
    }

    render() {

    return (
        <div>
            {/* INPUT FIELDS, MIGHT HAVE TO BE STYLED IN A DEDICATED CSS SHEET LATER ON. OR USE SEMANTIC UI/BOOTSTRAP */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            style={{textAlign: "center", width: '50%', marginTop: '3.5em' ,marginBottom: '1em'}}
                            placeholder="Enter your Meal"  
                            type="text"
                            value={this.state.meal}
                            onChange={e => this.setState({meal: e.target.value})}>
                        </input>
                        <br/>
                        <input 
                            style={{marginTop: '5px', textAlign: "center", width: '50%'}} 
                            placeholder="Enter meal Calories" 
                            type="number" 
                            value={this.state.cal}
                            onChange={e => this.setState({cal: e.target.value})}>
                        </input>
                    </div>
                </form> 
            {/* BUTTON TO CAPTURE THE MEAL DATA. WILL HAVE TEXT CHANGE ONCE CLICKED FOR THE FIRST SET OF DATA; STATE UPDATE IN INDEX.JS */}
            <button 
                style={{marginTop: '5em', color: 'white', backgroundColor: '#2ecc71'}} 
                className="ui button" 
                type="submit" 
                onClick={() => {this.onButtonClick(); this.logic_Help(); this.props.captureMeal(this.state.meal)}}>
                Capture Meal
            </button>
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {mealName: state.mealName}
}

export default connect(mapStateToProps, {captureMeal})(CaptureForm);