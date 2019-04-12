import React from 'react';
import { Modal } from 'semantic-ui-react';

const ContactUsModal = () => {
    return (
        <Modal
            dimmer={'blurring'}
            trigger={<span>Contact Us</span>}
        >
            <Modal.Content style = {{backgroundColor: '#2ecc71', borderRadious: '15px', color: 'white'}}>
                <Modal.Description>
                    <form>
                        <input placeholder="Reason of contact"></input>
                            <br />
                        <span>How do you wish us to contact you: </span>
                    </form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

export default ContactUsModal;