import React from "react";

const Usercard = () => {
  return (
    <div className="w-60 flex flex-col justify-between items-center p-4  rounded-lg border-gray-300 border-2 shadow-md mt-3">
      <div className="w-30 h-30 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVbJCt852H-O9TE5n_0T0oG4d95AWjtclWIjrrfQgsw&s"
          alt="User"
        />
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <h2>User Name</h2>
        <p className="text-sm">Email</p>
        <p className="text-sm">Contact</p>
      </div>
      <div className="flex justify-between items-center gap-2 mt-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
