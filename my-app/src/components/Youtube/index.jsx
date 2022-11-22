import React, { Fragment } from "react";
import Youtube from "./Youtube";
import {
  imgJS,
  imgPY,
  imgMongo,
  imgNodejs,
  imgReact,
  imgRest,
} from "../Home/image";

const YoutubeWrapper = () => {
  return (
    <Fragment>
      <Youtube
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
      />
    </Fragment>
  );
};

export default YoutubeWrapper;
