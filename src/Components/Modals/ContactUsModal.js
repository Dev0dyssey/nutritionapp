import React from 'react';
import { Modal, Checkbox, Input, Button } from 'semantic-ui-react';

const ContactUsModal = () => {
    return (
        <Modal
            id='contactModal'
            dimmer={'blurring'}
            trigger={<span>Contact Us</span>}
            style={{width: '25vw'}}
        >
            <Modal.Content style = {{backgroundColor: '#2ecc71', color: 'white'}}>
                <Modal.Description style={{color: 'white'}}>
                    <Input style={{width: '100%', marginBottom: '1em'}} placeholder="Reason of contact" />
                        <br />
                    <span style={{marginBottom: '1em', display: 'inline-block'}}>How do you wish us to contact you: </span>
                        <br />

                    <Checkbox value="email" /> Email
                        <br/>
                    <Checkbox value="chat"/> Chat
                        <br />
                    <Checkbox value="phone" /> Phone
                        <br />

                    <Button
                        basic inverted
                        size='small'
                        style={{marginTop: '1em'}}
                    >
                        Submit
                    </Button>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

export default ContactUsModal;