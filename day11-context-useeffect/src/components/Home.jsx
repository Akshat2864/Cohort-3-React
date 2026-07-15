import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";

const Home = () => {
  let { count, setCount } = useContext(MyStore);

  console.log(count);
  console.log("Home Remdering...");

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;
