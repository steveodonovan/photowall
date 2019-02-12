import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Photo(props){
    const post = props.post
    const postCount = props.comments[post.id] ? props.comments[post.id].length  : 0
    return <figure className="figure"> 
    <Link to={`/single/${post.id}`}> <img className = "photo" src={post.imageLink} alt={post.description}/> </Link>
		<figcaption> <p> {post.description} </p> </figcaption>
		<div className="button-container">
		<button onClick={() => {
			props.startRemovingPost(props.index, post.id)
			props.history.push("/")
		}}> Remove </button>
		<Link className="button" to={`/single/${post.id}`}> 
			<div className="comment-count">
			    <div className="speech-bubble">
			    </div>
			     {postCount}
			</div>
	    </Link>
		</div>
		</figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo