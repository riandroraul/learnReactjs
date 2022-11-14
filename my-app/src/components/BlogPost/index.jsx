import React, { Component, Fragment } from 'react'
import '../../Assets/css/blogpost.css'
import Post from './Post'

class BlogPost extends Component {
  render() {
    return (
      <Fragment>
        <div className='section-title'>Blog Post</div>
        <Post title="Dummy Title" desc="Title description" image="https://placeimg.com/200/150/tech" />
      </Fragment>
    )
  }
}

export default BlogPost