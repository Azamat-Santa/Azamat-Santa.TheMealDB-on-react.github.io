import React from 'react'
import { Link } from 'react-router-dom'

export default function OUTPUT({ data }) {
    return (
        <div style={{ width: '100%', display: "flex", flexWrap: 'wrap',justifyContent:'center', }}>


            {data ? data.map((el) => {
                return (
                    
                    <Link to={'/cocktaiInfo/' + el.idDrink} style={{ width: '20%', padding: '10px' ,textDecoration:'none'}} key={el.idDrink}>
                        <div key={el.idDrink} style={{background:'white'}} >

                            <img style={{ width: '100%', height: '80%' }} src={el.strDrinkThumb} />

                            <div style={{textAlign:'center', color:'grey',height:'50px',}} > Name:<span style={{color:'black'}}>{el.strDrink}</span></div>
                        </div>
                    </Link>
                    
                    
                )
            })




                : <h3>Pusto</h3>}
        </div>
    )
}