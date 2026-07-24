import React from "react";

const Home = ({greet}) => {
  //wrap whole function

    greet();

  console.log("home.........");
  return <div>home</div>;
};

// export default React.memo(Home, (prevProps, nextProps)=>{
//     return prevProps.users.id === nextProps.users.id
// });

export default React.memo(Home);
