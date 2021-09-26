import React, { useEffect, useState } from 'react'
import { getRandomMeal, } from '../../config/index'
import OUTPUT from '../OUTPUT/index';

import '../../App.css'

export default function Home() {
  
  const [info, setInfo] = useState('')
 
  useEffect(() => {
    getAllCategory()

  }, [])

  const getAllCategory = async () => {
    const req = await fetch(getRandomMeal)
    const resp = await req.json()
    setInfo(resp.categories)
  }

 


  return (
    <div className='OutputBgImg'>
      <OUTPUT
        data={info}
      />
    </div>
  )
}