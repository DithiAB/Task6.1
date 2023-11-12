import React from 'react'
import './Debounce.css'

import image from './Images/image.jpg'
const Result = ({result}) => {
  return (
    
 <div className='result'>
         {result.map((post)=>{
          const{id,title}= post;
          return<div key={id} className='list'>
            <figure>
            <img 
            width='50'
            height='50'
            style={{objectFit:'contain'}}
            // src={`https://picsum.photos/200 ${post.posterpath}`}
            src={image}
            alt=""/>
            </figure>
              <p className='text'>{title}</p>
          </div>
        })}
    </div>

  )
}

export default Result