import React from 'react';
import './Card.css';
import SettingsModal from './Modals/SettingsModal';
import ContactUsModal from './Modals/ContactUsModal';

const NavButtons = () => {

    const mouseOver = (e) => {
        e.target.style.backgroundColor='#2ecc71';
        e.target.style.color='white';
    }

    const mouseOut = (e) => {
        e.target.style.backgroundColor='';
        e.target.style.color='';
    }

    return(
    <button className="ui simple dropdown button" onMouseEnter={mouseOver} onMouseLeave = {mouseOut}>

            <span className="text" style={{textAlign: 'right'}}>
                <i className="align justify icon"></i>
                Login
            </span>

            <div className="menu" style={{backgroundColor: '#2ecc71'}}>
                <div className="item" style={{color: 'white'}}>
                    <i className="users icon"></i>
                    Logout
                </div>
                
                {/* Settings button */}
                <div className="item" style={{color: 'white'}}>
                    <i className="lock icon"></i>
                    <SettingsModal />
                </div>

                {/* Contact Us button */}
                <div className="item" style={{color: 'white'}}>
                    <i className="conversation icon"></i>
                    <ContactUsModal />
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