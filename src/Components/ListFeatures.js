import React from 'react';

const ListFeatures = () => {
    return(
        <div class='containerfeature'>
            <div className = 'list' style={{color: 'white'}}>
            <i class="far fa-edit"></i>
                Capture your daily meals
            </div>
            
            <div className = 'list' style={{color: 'white'}}>
            <i class="fas fa-list"></i>
                Nutritional information
            </div>

            <div className = 'list' style={{color: 'white'}}>
            <i class="fas fa-users"></i>
                Share your progress with others
            </div>
        </div>
    );
}

export default ListFeatures;