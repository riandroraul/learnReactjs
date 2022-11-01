import React from "react";
import ChildComp from "./ChildComp";

const Comp = ({ nama1, setNama }) => {
  // setNama("Comp");
  return (
    <div>
      nama saya {nama1}
      <ChildComp nama1={nama1} setNama={setNama} />
    </div>
  );
};

export default Comp;
