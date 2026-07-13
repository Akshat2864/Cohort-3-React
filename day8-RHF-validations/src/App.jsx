import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);




  return (
    <div className="p-3 h-screen">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex p-4">
          <Usercard />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80%] p-4">
          <Form />
        </div>
      )}
    </div>
  );
};

export default App;
