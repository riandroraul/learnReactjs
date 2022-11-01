import React from "react";
import { useState } from "react";
import Comp from "./Comp";

const GrandComp = () => {
  const [nama, setNama] = useState("INSZESGOSDOSANTO");
  const nama1 = "INZESGOSDOSANTO";
  return (
    <div>
      Nama saya {nama}
      <Comp nama1={nama1} setNama={setNama} />
    </div>
  );
};

export default GrandComp;
