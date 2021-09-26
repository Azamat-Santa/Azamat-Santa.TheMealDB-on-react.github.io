import React from 'react'
import { getMealByNameApi } from '../../config';
import '../AbouteMeal/abouteMeal.css'

export default function AbouteMeal(props) {

  React.useEffect(() => {
    let name = props?.match.params.abouteMeal;
    getIngredients(name);

  }, []);



  const [dataMeal, setDataMeal] = React.useState();


  const getIngredients = async (name) => {
    const req = await fetch(getMealByNameApi + name);
    const res = await req.json();
    setDataMeal(res.dataMeal[0]);
    console.log(res.dataMeal[0])
  }

 

  return (
    
              <div className='aboutMealDescription'>
                <div className='aboutMealDescriptionLeft'>
                  <h2>{dataMeal.strMeal}</h2>

                  <img src={dataMeal.strMealThumb} alt={dataMeal.strMealThumb}/>

                </div>
                 <div className='aboutMealDescriptionIngridients'>
                    <h2>Ingredients</h2>

                    {dataMeal.strIngredient1?<div >{dataMeal.strMeasure1} {dataMeal.strIngredient1}</div>:null}
                    {dataMeal.strIngredient2?<div>{dataMeal.strMeasure2} {dataMeal.strIngredient2}</div>:null}
                    {dataMeal.strIngredient3?<div>{dataMeal.strMeasure3} {dataMeal.strIngredient3}</div>:null}
                    {dataMeal.strIngredient4?<div>{dataMeal.strMeasure4} {dataMeal.strIngredient4}</div>:null}
                    {dataMeal.strIngredient5?<div>{dataMeal.strMeasure5} {dataMeal.strIngredient5}</div>:null}
                    {dataMeal.strIngredient6?<div>{dataMeal.strMeasure6} {dataMeal.strIngredient6}</div>:null}
                    {dataMeal.strIngredient7?<div>{dataMeal.strMeasure7} {dataMeal.strIngredient7}</div>:null}
                    {dataMeal.strIngredient8?<div>{dataMeal.strMeasure8} {dataMeal.strIngredient8}</div>:null}
                    {dataMeal.strIngredient9?<div>{dataMeal.strMeasure9} {dataMeal.strIngredient9}</div>:null}
                    {dataMeal.strIngredient10?<div>{dataMeal.strMeasure10} {dataMeal.strIngredient10}</div>:null}
                    {dataMeal.strIngredient11?<div>{dataMeal.strMeasure11} {dataMeal.strIngredient11}</div>:null}
                    {dataMeal.strIngredient12?<div>{dataMeal.strMeasure12} {dataMeal.strIngredient12}</div>:null}
                    {dataMeal.strIngredient13?<div>{dataMeal.strMeasure13} {dataMeal.strIngredient13}</div>:null}
                    {dataMeal.strIngredient14?<div>{dataMeal.strMeasure14} {dataMeal.strIngredient14}</div>:null}
                    {dataMeal.strIngredient15?<div>{dataMeal.strMeasure15} {dataMeal.strIngredient15}</div>:null}
                    {dataMeal.strIngredient16?<div>{dataMeal.strMeasure16} {dataMeal.strIngredient16}</div>:null}
                    {dataMeal.strIngredient17?<div>{dataMeal.strMeasure17} {dataMeal.strIngredient17}</div>:null}
                    {dataMeal.strIngredient18?<div>{dataMeal.strMeasure18} {dataMeal.strIngredient18}</div>:null}
                    {dataMeal.strIngredient19?<div>{dataMeal.strMeasure19} {dataMeal.strIngredient19}</div>:null}
                    {dataMeal.strIngredient20?<div>{dataMeal.strMeasure20} {dataMeal.strIngredient20}</div>:null}
                   
                  </div>
                <div className='abouteMealDescr'>
                  
                    <h2>Method</h2>
                    {dataMeal.strInstructions}
                </div>

                
                 
                </div>

              


          
  )
}
