import React from 'react'
import { getMealByNameApi } from '../../config';
import '../AbouteMeal/abouteMeal.css'
import '../../App.css'

export default function AbouteMeal(props) {

  React.useEffect(() => {
    let name = props?.match.params.abouteMeal;
    getIngredients(name);

  }, []);



  const [dataMeal, setDataMeal] = React.useState();


  const getIngredients = async (name) => {
    const req = await fetch(getMealByNameApi + name);
    const res = await req.json();
    setDataMeal(res.meals);
    console.log(res.meals)
  }



  return (
    <div>
      {
        dataMeal ? dataMeal.map((item) => {
          return (
            <div key={item.idMeal}>
              <div className='aboutMealDescription' >
                <div className='aboutMealDescriptionLeft'>
                  <h2>{item.strMeal}</h2>

                  <img src={item.strMealThumb} alt={item.strMeal} />

                </div>
                <div className='aboutMealDescriptionIngridients'>
                  <div className="ingridientTitle">
                    <h2>Ingredients</h2>
                  </div>

                  <div className="ingridientElement">
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



                </div>
                <div className='abouteMealDescr'>

                  <h2>Method</h2>
                  {item.strInstructions}
                </div>



              </div>




            </div>
          )
        }) : <div style={{height:'80vh'}}><div className="lds-ripple"><div></div><div></div></div></div>
      }
    </div>
  )
}
