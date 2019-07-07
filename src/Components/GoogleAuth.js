import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions/index';


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
                this.loginClick(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.loginClick);
            });
        });
    }

    loginClick = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    signInClick = () => {
        this.auth.signIn();
    };

    signOutClick = () => {
        this.auth.signOut();
    };

    loginButtonRender() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <span onClick = {this.signOutClick}>
                    Sign Out
                </span>
            )
        } else {
            return (
                <span onClick = { this.signInClick}>
                    Sign In
                </span>
            )
        }
    }

    render(){
        return(<span>{this.loginButtonRender()}</span>);
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);