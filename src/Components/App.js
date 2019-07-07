import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MealCapture from './MealCapture';


const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <Route path="/" exact component = { MealCapture } />
            </BrowserRouter>
        </div>
    );
}

export default App;