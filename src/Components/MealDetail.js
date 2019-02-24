import React from 'react';

const MealDetail = ({detail, mealName, showComponent, urls, nutrition}) => {

    return(
        <div className="meal-detail container" style={{display: `${showComponent}`}}>
            <img className="meal-photo"src={urls.regular}/>
                    <div className="information">
                        <h4>General Nutritional Information</h4>
                            <strong>{mealName}</strong>
                        <br/>
                            {nutrition}
                    </div>
                <div className="meal-description">
                    {detail}
                </div>
        </div>

    );
};

export default MealDetail;