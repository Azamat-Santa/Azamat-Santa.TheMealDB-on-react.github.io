import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function OUTPUT({ data, dataSearch }) {
    return (
        <div className='datailWrapper'>
         <div className='DatailTitle'><h2>Category</h2></div>
 

            {data ?

                data.map((el,index) => {
                    return (
                       
                            <Link to={'/categorieInfo/' + el.strCategory} className='outputCardLink' key={el.idCategory}>
                                <div style={{ background: 'white' }} key={el.idCategory}  >
                                    <img style={{ width: '100%', height: '80%' }} src={el.strCategoryThumb} alt={el.id} />
                                    <div className='outputCategorieName' >
                                        {el.strCategory}
                                    </div>
                                </div>
                            </Link>
                    
                    )
                })
                :
                <h3>pusto</h3>}
       

        </div>
    )
}