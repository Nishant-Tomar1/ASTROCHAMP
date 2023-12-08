import React from 'react'
import { motion } from 'framer-motion'
import Styles from "../Styles/ContactUs.module.css"


function ContactUs() {

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
}
  return (
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>


  <div className="w-full md:w-4/5 overflow-hidden p-3 flex flex-col gap-6 justify-center items-center mt-16 ">

    <div style={{width:'100%',height:'70vh'}}>
      <iframe width="100%" height="100%" className="relative inset-0" frameborder="0" title="map" marginheight="5" marginwidth="5" scrolling="no" src="https://maps.google.com/maps/?width=100%&height=600&hl=en&q= IIT Bhubaneswar, Jatni&t=&z=15&ie=UTF8&iwloc=B&output=embed"
 style={{filter: "grayscale(1) contrast(1.2) opacity(1);",borderRadius:'16px',border:'2.4px solid gray'}}></iframe>
    </div>   
 
    <div className="w-4/5 md:w-1/2  bg-purple-800 lg:bg-purple-900 absolute flex flex-col py-4 rounded shadow-md opacity-1/2">
        <div className="px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Indian Institute of Technology Bhubaneswar, Argul Khordha-752050, Odisha</p>
        </div>
        <div className=" px-6 mt-1 ">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">EMAIL</h2>
          <p className="" >secyastronomy@iitbbs.ac.in</p>
          {/* <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p> */}
        </div>
      </div>
  </div>


  <div className="container px-4 px-md-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl font-medium title-font text-orange-400">Send a Message!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to reach out with any questions or messages, and we'll get back to you as soon as we can.</p>
    </div>
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-wrap ">
        <div className="p-2 w-full md:w-2/5">
          <div className="relative ">
            <label HtmlFor="name" className="leading-7 text-gray-400 ">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-0 border-2 rounded  border-gray-600  focus:border-white focus:border-2 focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full md:w-3/5">
          <div className="relative">
            <label HtmlFor="email" className="leading-7  text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-0 border-2 rounded border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label HtmlFor="message" className="leading-7  text-gray-400">Message</label>
            <textarea id="message" name="message" className=" border-2 h-32 w-full bg-transparent bg-opacity-0 rounded border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full text-center">
          <button className={Styles.SubmitBtn}>Send</button>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className={Styles.FooterDiv} style={{color:'gray !important'}}>

<div> Astro_Champ </div>
<div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!"</div>


<div className={Styles.FooterEnd}> 
  <div>© Copyright 2024 | All rights Reserved </div>
  <div> Designed and developed by <a href="https://www.github.com/DEV-NISHANT-HERE" style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team Astro_Champ) </div>
</div>

</div>
        
    </motion.div>
  )
}

export default ContactUs


