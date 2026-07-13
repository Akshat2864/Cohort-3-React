import React from "react";

const Usercard = ({ user, delUser, setToggle, setUpdatedData }) => {
  return (
    <div className="w-60 flex flex-col justify-between items-center p-4  rounded-lg border-gray-300 border-2 shadow-md mt-3">
      <div className="w-30 h-30 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt="User"
        />
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <h2>{user.userName}</h2>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex justify-between items-center gap-2 mt-3">
        <button
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => delUser(user.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
