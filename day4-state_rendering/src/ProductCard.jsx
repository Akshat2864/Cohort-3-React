import React from 'react'

const ProductCard = ({product, del}) => {
  return (
    <div className="p-2 border-2 rounded flex flex-col gap-4">
      <div className="w-40">
        <img src= {product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title.substring(0,15)}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-800'>{product.price}</p>
      </div>
      <button onClick={()=>del(product.id)} className='px-2 py-1 bg-red-500 text-white'>Delete</button>
    </div>
  )
}

export default ProductCard
