import React from 'react';
import './Card.css';
import SettingsModal from './Modals/SettingsModal';

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

                <div className="item" style={{color: 'white'}}>
                    <i className="lock icon"></i>
                    <SettingsModal />
                </div>

                <div className="item" style={{color: 'white'}}>
                    <i className="conversation icon"></i>
                    Contact Us
                </div>

                <div className="item" style={{color: 'white'}}>
                    <i className="exclamation triangle icon"></i>
                    Report an Issue
                </div>

{/* <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal> */}
                
            </div>
        </button>
    )
}

export default NavButtons;