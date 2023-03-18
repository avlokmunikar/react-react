import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-5 px-14'>
      <div className='h-[450px]'>
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_4ggqrsq6.json" background="transparent" speed="1" loop autoplay></lottie-player>

      </div>
      <div className=''>
        <h1 className='text-3xl font-extrabold'>Hello i'm avlok</h1>
        <p className='py-2 text-pink-600 text-lg'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates commodi corrupti distinctio minus, sint aspernatur, suscipit consequatur iusto sit possimus debitis aperiam sapiente excepturi iste quae quam in, recusandae impedit veritatis obcaecati nostrum. Porro odio quo, dolorum velit perspiciatis natus saepe corporis officiis necessitatibus alias dolores earum. Cum nam laudantium vel dolorum reiciendis quo. Eos quam ipsam sequi ipsum!</p>
      </div>
    </div>
  )
}

export default Display
