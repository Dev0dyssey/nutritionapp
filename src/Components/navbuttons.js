import React from 'react';

const NavButtons = () => {
    return(
        <button className="ui simple dropdown button">

            <span className="text" style={{textAlign: 'right'}}>
                <i className="align justify icon"></i>
                Login
            </span>

            <div className="menu">
                <div className="item">
                    <i className="users icon"></i>
                    Logout
                </div>

                <div className="item">
                    <i className="lock icon"></i>
                    Settings
                </div>

                <div className="item">
                    <i className="conversation icon"></i>
                    Contact Us
                </div>

                <div className="item">
                    <i className="exclamation triangle icon"></i>
                    Report an Issue
                </div>
                
            </div>
        </button>
    )
}

export default NavButtons;