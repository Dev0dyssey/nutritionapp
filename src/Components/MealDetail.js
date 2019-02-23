import React from 'react';

const MealDetail = ({detail, mealName, showComponent, urls, nutrition}) => {

    return(
        <div className="container" style={{display: `${showComponent}`}}>
            <img className="meal-photo"src={urls.regular}/>
                <div className="meal-name">
                    {mealName}
                    <div>
                        <h4>General Nutritional Information</h4>
                        Calories: {nutrition}
                    </div>
                </div>
                <div className="meal-description">
                    {detail}
                </div>
        </div>

    );
};

export default MealDetail;