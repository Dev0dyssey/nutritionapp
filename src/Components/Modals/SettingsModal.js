import React from 'react';
import { Header, Modal} from 'semantic-ui-react';

const SettingsModal = () => {
    return (
        <Modal 
        size={'tiny'} 
        dimmer={'blurring'} 
        style={{height: '450px', width: '250px', borderRadius: '15px', backgroundColor: '#2ecc71'}} 
        trigger={<span>Settings</span>}
        >

            
                <Modal.Content style={{backgroundColor: '#2ecc71', borderRadius: '15px', color: 'white'}}>
                    <Modal.Description>
                        <p style={{paddingBottom: '67px', fontSize: '17px'}}>Change Username<i className="material-icons" style={{marginLeft: '20px'}}>edit</i></p>
                        <p style={{paddingBottom: '67px', fontSize: '17px'}}>Change Password<i class="material-icons" style={{marginLeft: '20px'}}>lock</i></p>
                        <p style={{paddingBottom: '67px', fontSize: '17px'}}>Delete Account<i class="material-icons" style={{marginLeft: '20px'}}>cancel</i></p>
                        <p style={{fontSize: '17px'}}>Privacy Policy<i class="material-icons" style={{marginLeft: '20px'}}>verified_user</i></p>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
    );
}

export default SettingsModal;