import React from "react";
import Product from "../Class/Product";
import ParentComp from "../Class/ParentComp";
import laptop1 from "../Assets/img/laptop1.jpg";
import laptop2 from "../Assets/img/laptop2.jpg";
import laptop3 from "../Assets/img/laptop3.jpg";
import laptop4 from "../Assets/img/laptop4.jpg";
import laptop5 from "../Assets/img/laptop5.jpg";

const Home = () => {
  return (
    <div>
      <Product
        nama={"Macbook Pro 2020"}
        stock={10}
        harga={"Rp. 22.000.000"}
        status={"Tersedia"}
        gambar={laptop1}
      />
      <Product
        nama={"Asus Zenbook 2022"}
        stock={12}
        harga={"Rp. 12.000.000"}
        status={"Tersedia"}
        gambar={laptop2}
      />
      <Product
        nama={"Asus ROG"}
        stock={14}
        harga={"Rp. 19.000.000"}
        status={"Tersedia"}
        gambar={laptop3}
      />
      <Product
        nama={"Lenovo 2022"}
        stock={17}
        harga={"Rp. 9.000.000"}
        status={"Tersedia"}
        gambar={laptop4}
      />
      <Product
        nama={"Macbook Air 2020"}
        stock={20}
        harga={"Rp. 15.000.000"}
        status={"Tersedia"}
        gambar={laptop5}
      />
      <ParentComp />
      {/* <Blog
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
      /> */}
    </div>
  );
};

export default Home;
