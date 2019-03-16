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
            username: "garishere"
        }
    }

    inputChange(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.comment);
    }

    addNewComment(event, index) {
        event.preventDefault();
        this.setState(
            this.state.comments.push({
                [event.target.name]: event.target.value
            })
        )
    }

    render() {
        // console.log(this.state);
        return (
            <CardBody className="commentSection">
                {this.state.comments.map(comment => 
                    <Comment username={comment.username} text={comment.text} key={comment.text}/>
                )}
                <AddComment 
                    addNewComment={this.addNewComment} 
                    inputChange={this.inputChange}
                />
            </CardBody>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}