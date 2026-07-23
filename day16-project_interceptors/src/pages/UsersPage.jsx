
import React, { useState } from "react";
import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosinstance";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getUsersData = async () => {
    try {
      let res = await axiosInstance.get("/users")
      console.log(res);
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in api call ", error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);


  if(isLoading) return <h1 className="text-4xl">loading user.....</h1>

  return (
    <div className="grid grid-cols-4 gap-4">
      {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UsersPage;
