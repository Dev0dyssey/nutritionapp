import React from 'react';
import { Modal } from 'semantic-ui-react';

const ProfileModal = () => {
    return(
        <Modal
            size={'large'}
            dimmer={'blurring'}
            style={{height: '50%', width: '50%', borderRadius: '15px', backgroundColor: '#2ecc71'}}
            trigger={<span>Profile</span>}
        >

            <Modal.Content style = {{backgroundColor: '#2ecc71', color: 'white', borderRadius: '50%'}}>
                <Modal.Description>
                    <div style={{textAlign: 'center'}}>
                    <img
                        style = {{borderRadius: '50%', height: '10rem', width: '10rem'}}
                        alt = 'Profile'
                        src = "https://bit.ly/2JEd0vj">
                    </img>
                    <h3>CHANGE PROFILE PICTURE</h3>
                    </div>
                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default ProfileModal;