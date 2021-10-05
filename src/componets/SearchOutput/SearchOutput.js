import React from 'react'


export default function SearchOutput(props) {
  
  return (
    <div>
      {
        props.data ? props.data.map((item) => {
          return (

            <div className='aboutMealDescription' key={item.strMeal}>
              <div className='aboutMealDescriptionLeft'>
                <h2>{item.strMeal}</h2>

                <img src={item.strMealThumb} alt={item.strMeal} />

              </div>
              <div className='aboutMealDescriptionIngridients'>
                <h2>Ingredients</h2>

                {item.strIngredient1 ? <div >{item.strMeasure1} {item.strIngredient1}</div> : null}
                {item.strIngredient2 ? <div>{item.strMeasure2} {item.strIngredient2}</div> : null}
                {item.strIngredient3 ? <div>{item.strMeasure3} {item.strIngredient3}</div> : null}
                {item.strIngredient4 ? <div>{item.strMeasure4} {item.strIngredient4}</div> : null}
                {item.strIngredient5 ? <div>{item.strMeasure5} {item.strIngredient5}</div> : null}
                {item.strIngredient6 ? <div>{item.strMeasure6} {item.strIngredient6}</div> : null}
                {item.strIngredient7 ? <div>{item.strMeasure7} {item.strIngredient7}</div> : null}
                {item.strIngredient8 ? <div>{item.strMeasure8} {item.strIngredient8}</div> : null}
                {item.strIngredient9 ? <div>{item.strMeasure9} {item.strIngredient9}</div> : null}
                {item.strIngredient10 ? <div>{item.strMeasure10} {item.strIngredient10}</div> : null}
                {item.strIngredient11 ? <div>{item.strMeasure11} {item.strIngredient11}</div> : null}
                {item.strIngredient12 ? <div>{item.strMeasure12} {item.strIngredient12}</div> : null}
                {item.strIngredient13 ? <div>{item.strMeasure13} {item.strIngredient13}</div> : null}
                {item.strIngredient14 ? <div>{item.strMeasure14} {item.strIngredient14}</div> : null}
                {item.strIngredient15 ? <div>{item.strMeasure15} {item.strIngredient15}</div> : null}
                {item.strIngredient16 ? <div>{item.strMeasure16} {item.strIngredient16}</div> : null}
                {item.strIngredient17 ? <div>{item.strMeasure17} {item.strIngredient17}</div> : null}
                {item.strIngredient18 ? <div>{item.strMeasure18} {item.strIngredient18}</div> : null}
                {item.strIngredient19 ? <div>{item.strMeasure19} {item.strIngredient19}</div> : null}
                {item.strIngredient20 ? <div>{item.strMeasure20} {item.strIngredient20}</div> : null}

              </div>
              <div className='abouteMealDescr'>

                <h2>Method</h2>
                {item.strInstructions}
              </div>



            </div>





          )
        })
          : <h2>Такого блюда не существует</h2>
      }
    </div>
  )
}
