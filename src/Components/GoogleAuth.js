import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isLoggedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '917601408536-oj07f96vg3g7obm818dbvh5f1kikqkra.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth)
            });
        });
    }

    render(){
        return(<span>Login</span>);
    }

}

export default GoogleAuth;