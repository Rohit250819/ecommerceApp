import React from 'react'

const NewsletterBox = () => {

  const OnSubmitHandler= (event) =>{
    event.preventDefault();
  }

  return (
    <div className='text-center my-4'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum?
      </p>
      <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe now!!</button>
      </form>
    </div>
  )
}

export default NewsletterBox