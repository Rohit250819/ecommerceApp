import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'}  text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil id veniam accusantium ut, rem harum eum cupiditate tenetur quisquam illo.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique distinctio vitae modi officia, nesciunt magnam ex, deleniti quibusdam vero quod architecto, eos libero assumenda facere. Ea ratione debitis deleniti iusto.</p>
          <b className="text-gray-600">Our Mission </b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eius nulla iure aut animi dicta non ullam, odio, consequuntur at dolore laborum illum doloremque similique nam? Iure, facere. Omnis, voluptas!</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'}text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit amet molestiae in voluptatibus dolor quia ipsum cumque eaque possimus!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit amet molestiae in voluptatibus dolor quia ipsum cumque eaque possimus!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit amet molestiae in voluptatibus dolor quia ipsum cumque eaque possimus!</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About