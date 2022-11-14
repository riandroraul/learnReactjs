import React from 'react'

function Post(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src={props.image} alt="" />
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        <div className="desc">{props.desc}</div>
      </div>
    </div>
  )
}

export default Post