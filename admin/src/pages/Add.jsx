import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

  const[image1, setImage1] = useState(false);
  const[image2, setImage2] = useState(false);
  const[image3, setImage3] = useState(false);
  const[image4, setImage4] = useState(false);

  const[name, setName] = useState('');
  const[description, setDescription] = useState('');
  const[category, setCategory] = useState('Men');
  const[subCategory, setSubCategory] = useState('Topwear');
  const[price, setPrice] = useState('');
  const[sizes, setSizes] = useState([]);
  const[bestseller, setBestseller] = useState(false);  onChange={(e)=> setImage1(e.target.files[0])} 

  return (
    <form className='w-full flex flex-col gap-4' action="">
      <div>
        <p className='mb-2 '>Upload image </p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id='image2' hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id='image3' hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id='image4' hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='type here' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
      </div>

      <div className="flex flex-col sm:flex-row gap-2  w-full sm:gap-8">

        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product SubCategory</p>
          <select className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2' >Product price</p>
          <input className='w-full sm:w-[120px] px-3 py-2' type="number" placeholder='price here' required/>
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
          </div> 
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2  mt-2'>
        <input type="checkbox" id='bestseller'/>
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

    <button type='submit' className='bg-black text-white py-2 rounded-md w-28'>Add Product</button>

    </form>
  )
}

export default Add