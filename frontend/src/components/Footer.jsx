import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>
        <div>
        <img src={assets.logo}  className='mb-5 w-32' alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Et tempora vero, aperiam numquam dolorum doloribus illum suscipit iusto amet consectetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, velit eaque. Quisquam facilis ipsa facere.
        </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            Company
          </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Get in touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-1234567890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
      <hr className="border-t-2 border-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer