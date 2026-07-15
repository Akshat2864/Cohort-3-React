import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { ContextProvider, MyStore } from "./context/MyStore";
import axios from "axios";

const App = () => {
  // console.log("App Rendering...")

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const [apiData, setApiData] = useState(null)

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    // setApiData(res.daa);

  };

  getData();

  useEffect(() => {
    console.log("App Rendering....");
  }, [toggle]); //only runs when toggle changes  [] this array is dependency which decribes when to run this piece of code

  return (
    <div>
      {/* <ContextProvider>
        <Home />
        <About />
      </ContextProvider> */}

      <h1>Count is - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>Change Toggle</button>

      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
