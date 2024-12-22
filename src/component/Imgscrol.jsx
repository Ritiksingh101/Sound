import React, { useState } from 'react'

function Photoslider() {
 
  return (
    <div className='w-[100%] lg:h-[80vh] h-[50vh] overflow-hidden '>
      <div className='photoslider w-[400%] '>
        <img className='slider overflow-hidden' src='https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        <img className='slider overflow-hidden' src='https://optim.tildacdn.one/tild3732-6662-4534-b366-363439393030/-/resize/600x/-/format/webp/_MG_6868_-_c.jpg'></img>
        <img className='slider overflow-hidden' src='https://hips.hearstapps.com/hmg-prod/images/girl-practices-yoga-in-the-studio-royalty-free-image-1705935356.jpg'></img>
        <img className='slider overflow-hidden' src='https://media.post.rvohealth.io/wp-content/uploads/2020/08/Sound_Healing-732x549-thumbnail-732x549.jpg'></img>
       
      </div>
     
    </div>
  )
}

export default Photoslider