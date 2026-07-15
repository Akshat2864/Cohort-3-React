import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("Hey i am in about");
  }, 1000); //still runs when lost from render tree memory leak is happening here need to stop this use USE-EFFECT to remove this

  useEffect(() => {
    console.log("About Rendering...");


    //only use when components leaks some memory and if you want to track any updates
    return () => {
      //runs when render tree se jaa rha hota hai
      clearInterval(interval);
      console.log("About is triggered kyuki wo jaa chuka");
    };
  }, []);

  return <div>About</div>;
};

export default About;
