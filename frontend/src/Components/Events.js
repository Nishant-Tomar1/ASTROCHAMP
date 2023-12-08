import React from 'react'
import { motion } from 'framer-motion'
import Styles from '../Styles/Events.module.css'

function Events() {
  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:1,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:1,
            times:[0,1],
        }
    },
}

  return (
    <motion.div variants={variant} animate='entry' exit='exit'>

<section class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-col px-2 pt-20 lg:pt-24 justify-center items-center">
    <img class="lg:w-2/3 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded h-64" alt="hero" src="https://dummyimage.com/720x600" />
    <div class="w-full md:w-2/3 flex flex-col mb-10 px-4 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-3 font-medium text-orange-400">1. SPACE QUIZ</h1>
      <p class="mb-8 leading-relaxed text-white-400">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2 justify-center items-center">
    <img class="lg:w-2/3 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded h-64" alt="hero" src="https://dummyimage.com/720x600" />
    <div class="w-full md:w-2/3 flex flex-col mb-10 px-4 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-3 font-medium text-orange-400">2. ASTEROID VENTURE </h1>
      <p class="mb-8 leading-relaxed text-white-400">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded h-64" alt="hero" src="https://dummyimage.com/720x600" />
    <div class="w-full md:w-2/3 flex flex-col mb-10 px-4 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-3 font-medium text-orange-400">3. BLAST OFF</h1>
      <p class="mb-8 leading-relaxed text-white-400">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2 justify-center items-center">
    <img class="lg:w-2/3 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded h-64" alt="hero" src="https://dummyimage.com/720x600" />
    <div class="w-full md:w-2/3 flex flex-col mb-10 px-4 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-3 font-medium text-orange-400">4. SPACE ART</h1>
      <p class="mb-8 leading-relaxed text-white-400">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2 justify-center items-center">
    <img class="lg:w-2/3 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded h-64" alt="hero" src="https://dummyimage.com/720x600" />
    <div class="w-full md:w-2/3 flex flex-col mb-10 px-4 items-center text-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-3 font-medium text-orange-400">5. STARBORN SAGAS</h1>
      <p class="mb-8 leading-relaxed text-white-400">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>    
    </div>
  </div>
  
</section>

    </motion.div>
  )
}

export default Events



