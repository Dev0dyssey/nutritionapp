import React from 'react';

// COMMENT COMPONENT TO GATHER THE USER INPUT AND DISPLAY COMMENT BACK TO THE PARENT <CARDDISPLAY />
class Comment extends React.Component {
    state = {
        comment: ''
    }

    render(){
        return(
        <div className="ui form description">
            <input 
                style = {{textAlign: 'center'}}
                type="text"
                placeholder="Comment your meal"
                onChange = {e => this.setState({comment: e.target.value})}
            >
            </input>
            <button 
                className="ui teal button"
                type="submit"
                style={{marginTop: '10px'}}
                // ADDCOMMENT TAKEN FROM THE PROPS THAT HAS BEEN PASSED DOWN BY THE PARENT COMPONENT
                onClick = {() => {this.props.addComment(this.state.comment)}}> 
                Add Comment
            </button>
        </div>
        )
    }
}

export default Comment;