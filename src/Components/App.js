import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MealCapture from './MealCapture';
import TestRoute from './Routes/TestRoute';


const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                {/* <MealCapture/> */}
                <Route path="/" exact component = { MealCapture } />
                <Route path="/routes/test" exact component = { TestRoute } />
            </BrowserRouter>
        </div>
    );
}

export default App;