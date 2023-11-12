import React from 'react'
import './Debounce.css'
import cross from './Images/cross.png'

const Search = ({data, clearSearch, handleChange}) => {
  return (
    <div className='field' >
    <input
    type="text"
    placeholder='Search......'
    value={data}
    onChange={handleChange}/>
     {data&&(
    <figure className='cross' onClick={clearSearch}>
      <img
       width='16'
       height='16'
       
       style={{objectFit:'contain', marginTop:'8px'}} 
        src={cross}/></figure>
        )}
</div>
  )
}

export default Search