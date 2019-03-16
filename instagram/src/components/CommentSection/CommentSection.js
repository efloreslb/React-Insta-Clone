import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './commentSection.css';
import {CardBody} from 'reactstrap';
import AddComment from './AddComment';

// export default function CommentSection(props) {
export default class CommentSection extends React.Component {
    //console.log(props.comments);
    constructor(props) {
        super();
        this.state = {
            comments: props.comments,
            newcomment: ""
        }
    }

    inputChange = event => { //Use arrow function to avoid binding error
        this.setState({newcomment: event.target.value}) //[event.target.name]
    }

    // addNewComment = (event) => {
    //     event.preventDefault();
    //     // const newcomments = this.state.comments.slice(); //no args - copies array
    //     const newcomments = [...this.state.comments] //spread operator creates copy
    //     newcomments.push({
    //         username: 'edgar',
    //         text: this.state.newcomment
    //     })
    //     this.setState({comments: newcomments, newcomment: ""})
    // }
    addNew = event => {
        event.preventDefault();
        this.setState(({comments, newcomment}) => {
            return {
                comments: [...comments, { //spread operator creates copy of array
                    username: 'edgar',
                    text: newcomment
                }],
                newcomment: ""
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <CardBody className="commentSection">
                {this.state.comments.map(comment => 
                    <Comment username={comment.username} text={comment.text} key={comment.text}/>
                )}
                <AddComment 
                    add={this.addNew} 
                    inputChange={this.inputChange}
                    value={this.state.newcomment}
                />
            </CardBody>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}