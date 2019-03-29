import React from 'react';
import './Card.css';

const NavButtons = () => {
    return(
    <button className="ui simple dropdown button" style={{backgroundColor: '#2ecc71', color: 'white'}}>

            <span className="text" style={{textAlign: 'right'}}>
                <i className="align justify icon"></i>
                Login
            </span>

            <div className="menu" style={{backgroundColor: '#2ecc71'}}>
                <div className="item" style={{color: 'white'}}>
                    <i className="users icon"></i>
                    Logout
                </div>

                <div className="item" style={{color: 'white'}}>
                    <i className="lock icon"></i>
                    Settings
                </div>

                <div className="item" style={{color: 'white'}}>
                    <i className="conversation icon"></i>
                    Contact Us
                </div>

                <div className="item" style={{color: 'white'}}>
                    <i className="exclamation triangle icon"></i>
                    Report an Issue
                </div>
                
            </div>
        </button>
    )
}

export default NavButtons;