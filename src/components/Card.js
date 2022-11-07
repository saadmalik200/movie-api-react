import React, { useContext, useEffect } from "react";
import CardContainer from "./CardContainer";
import { Context } from "./Context";

const Card = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      {state?.movies?.map((item, i) => (
        <CardContainer key={i} item={item} />
      ))}
    </div>
  );
};

export default Card;
