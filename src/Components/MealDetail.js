import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';

const MealDetail = ({mealName, showComponent, urls, nutrition}) => {

    return(
        <div className="meal-detail container" style={{display: `${showComponent}`, color: 'white'}}>
            <img className="meal-photo" alt="Selected meal" src={urls.regular}/>
                    <div className="information">
                        <h4 style={{fontSize: "25px", fontWeight: "400"}}>General Nutritional Information</h4>
                            <strong>{mealName}</strong>
                        <br/>
                            {nutrition}
                    </div>
                <div className="meal-description">
                    <div className="ui buttons">
                        <button className="ui instagram button">
                            <i className="instagram icon"></i>
                            Instagram
                        </button>

                        <button className="ui facebook button">
                            <i className="facebook icon"></i>
                            Facebook
                        </button>

                        <button className="ui twitter button">
                            <i className="twitter icon"></i>
                            Twitter
                        </button>
                    </div>
                    <br/>
                    <FacebookProvider appId="meal-cal-log">
                        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                    </FacebookProvider>
                </div>
        </div>

    );
};

export default MealDetail;