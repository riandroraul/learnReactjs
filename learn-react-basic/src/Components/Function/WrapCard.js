import React from "react";
import CardComp from "./CardComp";
import laptop1 from "../Assets/img/laptop1.jpg";
import laptop2 from "../Assets/img/laptop2.jpg";
import laptop3 from "../Assets/img/laptop3.jpg";

const WrapCard = () => {
  return (
    <div>
      <CardComp
        id={1}
        image={laptop1}
        title={"Belajar PHP"}
        desc={"Belajar PHP Description"}
      />
      <CardComp
        id={2}
        image={laptop2}
        title={"Belajar NodeJS"}
        desc={"Belajar NodeJS Description"}
      />
      <CardComp
        id={3}
        image={laptop3}
        title={"Dasar Pemrograman Web"}
        desc={"Belajar Pemrograman Web"}
      />
    </div>
  );
};

export default WrapCard;
