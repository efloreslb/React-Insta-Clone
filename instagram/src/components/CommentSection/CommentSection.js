import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
// import './commentSection.css';
import {CardBody, CardSubtitle} from '../../../src/StyledComponents';
import AddComment from './AddComment';

// export default function CommentSection(props) {
export default class CommentSection extends React.Component {
    //console.log(props.comments);
    constructor(props) {
        super();
        this.state = {
            likes: props.likes,
            liked: false,
            comments: props.comments,
            newcomment: ""
        }
    }

    inputChange = event => { //arrow function to avoid binding error
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
                    username: localStorage.getItem('username'),
                    text: newcomment
                }],
                newcomment: ""
            }
        })
    }

    giveLike = () => {
        if (this.state.liked === false) {
            this.setState(prevState => {
                return {
                    likes: (prevState.likes + 1),
                    liked: true
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    likes: (prevState.likes - 1),
                    liked: false
                }
            })
        }
    }

    render() {
        let liked = this.state.liked ? "liked" : "";

        return (
            <CardBody className="commentSection">
                <CardSubtitle className="interactButtons">
                    <div className={`${liked}`}>
                        <i className="far fa-heart" onClick={this.giveLike}></i>
                    </div>
                    <i className="far fa-comment"></i>
                </CardSubtitle>

                <CardSubtitle className="likes">
                    <strong>{this.state.likes} likes</strong>
                </CardSubtitle>

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