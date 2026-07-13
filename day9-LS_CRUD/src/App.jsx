import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";


const App = () => {
  // localStorage.setItem("name", "Akshat Agraa;")
  // localStorage.setItem("id", "A85")
  // localStorage.setItem("age", 25)

  // let ag= localStorage.getItem("age");
  // console.log(ag)

  // let obj= {
  //   name: "Akshat Agrawal",
  //   id: "A85",
  //   age: 25
  // }

  // localStorage.setItem("user", JSON.stringify(obj));

  // let ag= localStorage.getItem("user");
  // let res= JSON.parse(ag)
  // console.log(res)

  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const delUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  const [updatedData, setUpdatedData] = useState(null);

  return (
    <div className="p-3 h-screen">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex p-4">
          {users.map((elem) => {
            return (
              <Usercard
                setUpdatedData={setUpdatedData}
                setToggle={setToggle}
                delUser={delUser}
                key={elem.id}
                user={elem}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80%] p-4">
          <Form updatedData={updatedData} setUsers={setUsers} setToggle={setToggle} users={users} />
        </div>
      )}
    </div>
  );
};

export default App;
