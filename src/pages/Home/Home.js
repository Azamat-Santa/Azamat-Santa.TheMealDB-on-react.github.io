import React, { useEffect, useState } from 'react'
import { getRandomMeal, } from '../../config/index'
import '../../App.css'
import OUTPUT from './../../componets/OUTPUT/index';

export default function Home() {
  
  const [info, setInfo] = useState('')
 
  useEffect(() => {
    getAllCategory()

  }, [])

  const getAllCategory = async () => {
    const req = await fetch(getRandomMeal)
    const resp = await req.json()
    setInfo(resp.categories)
    console.log(resp);
  }

 


  return (
    <div className='OutputBgImg'>
      <OUTPUT
        data={info}
      />
    </div>
  )
}