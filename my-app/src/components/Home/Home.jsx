import React from 'react'
// import Youtube from "../Youtube/Youtube";
// import imgJS from "../../Assets/img/Youtube/JavaScript.png";
// import imgPY from "../../Assets/img/Youtube/python.png";
// import imgMongo from "../../Assets/img/Youtube/MongoDB.jpg";
// import imgNodejs from "../../Assets/img/Youtube/node-js.png";
// import imgReact from "../../Assets/img/Youtube/reactjs.png";
// import imgRest from "../../Assets/img/Youtube/rest-api.jpg";
import BlogPost from '../BlogPost';

const Home = () => {
  return (
    <div>
      {/* <Youtube
        image={imgJS}
        time="12:42"
        title="Belajar Javascript"
        desc="tutorial javascript untuk pemula"
      />
      <Youtube
        image={imgPY}
        time="14:30"
        title="Belajar Python"
        desc="tutorial python untuk pemula"
      />
      <Youtube
        image={imgMongo}
        time="10:31"
        title="Belajar MongoDB"
        desc="tutorial MongoDB untuk pemula"
      />
      <Youtube
        image={imgNodejs}
        time="17:38"
        title="Belajar Node Js"
        desc="tutorial Node Js untuk pemula"
      />
      <Youtube
        image={imgReact}
        time="27:09"
        title="Belajar React Js"
        desc="tutorial React Js untuk pemula"
      />
      <Youtube
        image={imgRest}
        time="30:05"
        title="Belajar REST API"
        desc="tutorial Rest API untuk pemula"
      /> */}
      <h4>Blog Post</h4>
      <hr />
      <BlogPost/>
    </div>
  )
}

export default Home;