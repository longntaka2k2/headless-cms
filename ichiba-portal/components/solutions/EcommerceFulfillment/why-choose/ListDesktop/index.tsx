import React from "react";
import ListLeft from "./ListLeft";
import ListRight from "./ListRight";

const ListDesktop = () => {
  return (
    <div className="tw-flex-col tw-gap-8 tw-hidden lg:tw-flex tw-mt-10">
      <ListLeft />
      <ListRight />
    </div>
  );
};

export default ListDesktop;
