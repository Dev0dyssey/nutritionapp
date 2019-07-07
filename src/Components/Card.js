import React from 'react';
import './Card.css';
import CardDisplay from './CardDisplay';

import { connect } from 'react-redux';

class Card extends React.Component {
    // ARRAY.MAP TO ITERATE OVER THE ARRAY OF IMAGES FROM THE STATE VALUE. SAME AS A FOR LOOP, BUT MORE ELEGANT AND CONDENSED CODE
    // AS WE ITERATE OVER THE ARRAY, EACH VALUE IS ASSIGNED TO A NEW <CARD /> AND VALUES ARE POPULATED FROM THE PROPS VALUES
    // DESTRUCTURE THE ARAY TO GET ONLY THE VALUES WE ARE LOOKING FOR AND REDUCE NUMBER OF REPEAT REFERENCES (I.E. IMAGE.DESCRIPTION)
    renderImage() {
        return this.props.images.map(image => {
        return (
            // CARD COMPONENT
            <CardDisplay 
                image = {image}
                meal = {this.props.meal}
                url = {image.urls.regular}
            />
        )
    })
}

    render(){
        return(
            <div className="image-list">{this.renderImage()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        images: state.img,
        meal: state.meal
    }
}

export default connect(mapStateToProps)(Card);