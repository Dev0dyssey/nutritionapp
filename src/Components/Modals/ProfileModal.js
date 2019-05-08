import React from 'react';
import { Modal } from 'semantic-ui-react';

const ProfileModal = () => {
    return(
        <Modal
            size={'large'}
            dimmer={'blurring'}
            style={{height: '450px', width: '450px', borderRadius: '15px', backgroundColor: '#2ecc71'}}
            trigger={<span>Profile</span>}
        ></Modal>
    )
}

export default ProfileModal;