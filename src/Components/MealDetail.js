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
                    <br/>
                    <div className="ui buttons">
                        <button className="tiny ui button">Add Comments</button>
                        <button className="ui instagram button">
                            <i className="instagram icon"></i>
                            Instagram
                        </button>
                    </div>
                    <br/>
                    <div className="ui mini input">
                        <input type="text" style={{display: 'none'}}></input>
                    </div>
                </div>
        </div>

    );
};

export default MealDetail;