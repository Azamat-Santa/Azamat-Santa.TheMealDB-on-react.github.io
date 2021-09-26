import React from 'react'


export default function SearchOutput({data}) {
    console.log(data.length);
    return (
        <div className='aboutMealDescription'>
                <div className='aboutMealDescriptionLeft'>
                  <h2>{data.strMeal}</h2>

                  <img src={data.strMealThumb} alt={data.strMealThumb}/>

                </div>
                 <div className='aboutMealDescriptionIngridients'>
                    <h2>Ingredients</h2>

                    {data.strIngredient1?<div >{data.strMeasure1} {data.strIngredient1}</div>:null}
                    {data.strIngredient2?<div>{data.strMeasure2} {data.strIngredient2}</div>:null}
                    {data.strIngredient3?<div>{data.strMeasure3} {data.strIngredient3}</div>:null}
                    {data.strIngredient4?<div>{data.strMeasure4} {data.strIngredient4}</div>:null}
                    {data.strIngredient5?<div>{data.strMeasure5} {data.strIngredient5}</div>:null}
                    {data.strIngredient6?<div>{data.strMeasure6} {data.strIngredient6}</div>:null}
                    {data.strIngredient7?<div>{data.strMeasure7} {data.strIngredient7}</div>:null}
                    {data.strIngredient8?<div>{data.strMeasure8} {data.strIngredient8}</div>:null}
                    {data.strIngredient9?<div>{data.strMeasure9} {data.strIngredient9}</div>:null}
                    {data.strIngredient10?<div>{data.strMeasure10} {data.strIngredient10}</div>:null}
                    {data.strIngredient11?<div>{data.strMeasure11} {data.strIngredient11}</div>:null}
                    {data.strIngredient12?<div>{data.strMeasure12} {data.strIngredient12}</div>:null}
                    {data.strIngredient13?<div>{data.strMeasure13} {data.strIngredient13}</div>:null}
                    {data.strIngredient14?<div>{data.strMeasure14} {data.strIngredient14}</div>:null}
                    {data.strIngredient15?<div>{data.strMeasure15} {data.strIngredient15}</div>:null}
                    {data.strIngredient16?<div>{data.strMeasure16} {data.strIngredient16}</div>:null}
                    {data.strIngredient17?<div>{data.strMeasure17} {data.strIngredient17}</div>:null}
                    {data.strIngredient18?<div>{data.strMeasure18} {data.strIngredient18}</div>:null}
                    {data.strIngredient19?<div>{data.strMeasure19} {data.strIngredient19}</div>:null}
                    {data.strIngredient20?<div>{data.strMeasure20} {data.strIngredient20}</div>:null}
                   
                  </div>
                <div className='abouteMealDescr'>
                  
                    <h2>Method</h2>
                    {data.strInstructions}
                </div>

                
                 
                </div>

    )
}
