import Result from "./Result"
import Search from "./Search"
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Debounce.css'

import search from './Images/search.svg'
const Debounce = () => {
    const[data, setData]= useState("")
    const[result, setResult]= useState([])
    const API_URL=`https://jsonplaceholder.typicode.com/albums?q=${data}`
    const getData=async()=>{
        try{
            const res= await axios(API_URL,{
                params:{
                    query:data,
                }
            })
            setResult(res.data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
    const timeout= setTimeout(()=>{
        if(data){
            getData();
        }
    },800);
    return()=>{
        clearTimeout(timeout)
    }
    },[data])
    
    const handleChange=(e)=>{
        setData(e.target.value)
    }
    const clearSearch=()=>{
        setData("")
        setResult([])
    }
  return (
    <div className='main' >
    <div className='header'>
 <figure className='search'>
     <img 
       width='15'
       height='15'
       style={{objectFit:'contain'}}
        src={search}/>
 </figure>
 <h3>Looking for Movies...</h3>   
 </div>
  <Search data={data} handleChange={handleChange} clearSearch={clearSearch}/>
  <Result result={result}/>
</div>
  )
}

export default Debounce