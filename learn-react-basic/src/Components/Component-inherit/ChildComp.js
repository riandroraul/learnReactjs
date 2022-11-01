import React from "react";

const ChildComp = ({ nama1, setNama }) => {
  console.log(nama1);
  setNama("sdadas");
  return <div>nama saya {nama1}</div>;
};

export default ChildComp;
