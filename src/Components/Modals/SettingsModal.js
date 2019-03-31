import React from 'react';
import { Header, Modal} from 'semantic-ui-react';

const SettingsModal = () => {
    return (
        <Modal 
        size={'tiny'} 
        dimmer={'blurring'} 
        style={{height: '700px', backgroundColor: '#2ecc71'}} 
        trigger={<span>Settings</span>}
        >

            <Modal.Header style={{backgroundColor: '#2ecc71'}}>Settings</Modal.Header>
                <Modal.Content style={{backgroundColor: '#2ecc71'}}>
                    <Modal.Description>
                        <Header>Settings</Header>
                        <p>Change profile settings</p>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
    );
}

export default SettingsModal;