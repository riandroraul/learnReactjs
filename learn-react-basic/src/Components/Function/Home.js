import React from "react";
import Blog from "./Blog";
import people_unsplash1 from "../Assets/img/people_unsplash1.jpg";
import people_unsplash2 from "../Assets/img/people_unsplash2.jpg";
import people_unsplash3 from "../Assets/img/people_unsplash3.jpg";

const Home = () => {
  return (
    <div>
      <Blog
        image={people_unsplash1}
        tanggal={"01 Agustus 2022"}
        judul={"Blockchain"}
        summary={"blockchain description"}
      />
      <Blog
        image={people_unsplash2}
        tanggal={"02 Agustus 2022"}
        judul={"Cyber Security"}
        summary={"Cyber Security description"}
      />
      <Blog
        image={people_unsplash3}
        tanggal={"03 Agustus 2022"}
        judul={"Cloud Computing"}
        summary={"Cloud Computing description"}
      />
    </div>
  );
};

export default Home;
