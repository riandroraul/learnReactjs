import React from "react";

export const Comp = ({ nama }) => {
  return (
    <div>
      nama saya {nama}
      <ChildComp nama={nama} />
    </div>
  );
};
