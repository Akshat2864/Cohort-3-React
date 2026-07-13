import React, {useState} from "react";

const Web = () => {

//     BRUTE FORCE
//   const [name, setName] = useState("Name");
//   const [email, setEmail] = useState("Email");
//   const [phone, setPhone] = useState("Phone");


// BETTER WAY
const[formData, setFormData] = useState({}) //donot need to give keys initially

const handleChange = (e)=>{
    setFor6-mData({...formData, [e.target.name]: e.target.value})
}

console.log(formData);

  return (
    <div className="flex flex-col gap-4 w-100 mx-auto mt-10">
      <input
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        onChange={handleChange}
        name="phone"
        type="text"
        placeholder="Phone"
        className="border border-gray-300 p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>

      <div className="mt-4">
        <h1 className="text-2xl font-bold">Name: {formData.name}</h1>
        <h1 className="text-2xl font-bold">Email: {formData.email}</h1>
        <h1 className="text-2xl font-bold">Phone: {formData.phone}</h1>
      </div>
    </div>
  );
};

export default Web;
