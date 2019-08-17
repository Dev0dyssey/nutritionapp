import React from 'react';
import './Card.css';
import CardDisplay from './CardDisplay';

const Card = ({images, meal, calories, mealDetail, mealData}) => {
    // ARRAY.MAP TO ITERATE OVER THE ARRAY OF IMAGES FROM THE STATE VALUE. SAME AS A FOR LOOP, BUT MORE ELEGANT AND CONDENSED CODE
    // AS WE ITERATE OVER THE ARRAY, EACH VALUE IS ASSIGNED TO A NEW <CARD /> AND VALUES ARE POPULATED FROM THE PROPS VALUES
    // DESTRUCTURE THE ARAY TO GET ONLY THE VALUES WE ARE LOOKING FOR AND REDUCE NUMBER OF REPEAT REFERENCES (I.E. IMAGE.DESCRIPTION)
    const MealImage = images.map((image) => {
        return(
            // CARD COMPONENT
            <CardDisplay 
                image = {image}
                meal = {meal}
                calories = {calories}
                mealDetail = {mealDetail}
                mealData = {mealData}
            />
        );
    })

    return <div className="image-list">{MealImage}</div>
}

export default Card;