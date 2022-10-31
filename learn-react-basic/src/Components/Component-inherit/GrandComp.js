import React from "react";
import { useState } from "react";

export const GrandComp = () => {
  const [nama, setNama] = useState("INSZESGOSDOSANTO");
  return (
    <div>
      Nama saya {nama}
      <Comp nama={nama} />
    </div>
  );
};
