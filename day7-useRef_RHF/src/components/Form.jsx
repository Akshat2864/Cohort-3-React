import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({});
    console.log('rendering');
    let handleChange = (e) => {

        setFormData({...formData, [e.target.name]:e.target.value})
    }

  return (
    <div className='w-125 mx-auto mt-10 p-5'>
        <form className='flex bg-white p-5 flex-col gap-4  border border-gray-300 rounded'>
            <input onChange={handleChange} className="p-2 border border-gray-300 rounded" type='text' placeholder="Product Name"/>
            <input onChange={handleChange} className="p-2 border border-gray-300 rounded" type='text' placeholder="Price"/>
            <span>Select Category</span>
            <select className="p-2 border border-gray-300 rounded">
                <option value="MENS">Mens</option>
                <option value="WOMEN">Women</option>
                <option value="KIDS">Kids</option>
            </select>
            <input onChange={handleChange} className="p-2 border border-gray-300 rounded" type= "text" placeholder="Product Image"/>
            <button className="p-2 bg-blue-500 text-white rounded">Create</button>
        </form>
    </div>
  )
}

export default Form
