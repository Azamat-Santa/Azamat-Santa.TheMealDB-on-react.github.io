import React from 'react'

import { getMealCategorieName } from '../../config/index'
import { NavLink } from 'react-router-dom';
import "../../App.css"

export default function Datail(props) {


  const [mealsCategorie, setMealsCategorie] = React.useState();

  React.useEffect(() => {
    const categorieName = props?.match.params.categorieName;
    getDetail(categorieName);
  },[]);

  
  const getDetail = async (categorieName) => {
    const req = await fetch(getMealCategorieName + categorieName);
    const res = await req.json();
    setMealsCategorie(res.meals);
    console.log(res.meals);
  };

 

  return (
    <div key={mealsCategorie?.idDrink} className='datailWrapper' >
      {mealsCategorie ? mealsCategorie.map((el) => {
        return (
      
          <NavLink to={'/abouteMeal/' + el.strMeal} className='outputCardLink' key={el.idCategory}>
            <div key={el.idCategory} style={{ background: 'white' }} >

              <img style={{ width: '100%', height: '80%' }} src={el.strMealThumb} alt={el.strMealThumb} />

              <div className='outputCategorieName' > <span>{el.strMeal}</span></div>
            </div>
          </NavLink>


        )
      })




        : <h3>Pusto</h3>}




    </div>
  )
}

