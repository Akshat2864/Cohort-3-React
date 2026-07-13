import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Comp4 = () => {

  let cd = useContext(MyStore)
  console.log(cd )
  
  return <div>this is Comp4- inside c3</div>;
};

export default Comp4;
