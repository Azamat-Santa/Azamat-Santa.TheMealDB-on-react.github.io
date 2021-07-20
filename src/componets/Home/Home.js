import React,{useEffect,useState} from 'react'
import { getAlcko, getAllCocktail, getCocktailByNameApi, getNonAlcko} from '../../config.js/index'
import OUTPUT from '../OUTPUT/index';
import SEARCH from '../SEARCH/index';
import '../../App.css'


export default function Home() {
  const[name,setName]=useState('')
  const[info,setInfo]=useState('')
  useEffect(() => {
    getAllCocktailApi()
   
  }, [])

  const getAllCocktailApi= async()=>{
    const req = await fetch(getAllCocktail)
    const resp = await req.json()  
    setInfo(resp.drinks)
  }

  const filterAlcko= async()=>{
      const req = await fetch(getAlcko)
      const resp = await req.json()     
      setInfo(resp.drinks)
    }

    const filterNonAlcko= async()=>{
      const req = await fetch(getNonAlcko)
      const resp = await req.json()
      setInfo(resp.drinks)
    
    }



  const getCocktailByName=async(event)=>{
    event.preventDefault()
    let req= await fetch(getCocktailByNameApi+name)
    let resp = await req.json()
    setInfo(resp.drinks)
    setName('')
  }
  

  return (
    <div className='OutputBgImg'>
       <SEARCH
           name={name}
           changeName={setName}
           send={getCocktailByName}
       />
       <div style={{display:'flex',margin:'10px',justifyContent:'center',}}>
          <h5 style={{color:'white'}}>Filter</h5>
          <div onClick={filterAlcko}  className='homeFilter'>Alcoholic </div>
          <div onClick={filterNonAlcko} className='homeFilter'>non-alcoholic</div>
       </div>
            

      
       <OUTPUT
       data={info}
      
       />

      

    </div>
  )
}