import React from 'react'

export default function Ingridients(props) {
    
    React.useEffect(() => {
      let name = props?.match.params.ingridients;
      getIngredients(name);
      
    }, []);
    

    

    const [ingredients, setIngredient] = React.useState();

   
    const getIngredients = async (name) => {
      const req = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + name
      );
      const res = await req.json();
     console.log(res.ingredients[0])
      setIngredient(res.ingredients[0]);
    }


    return (
        <div>
              <h2>About ingredient:</h2>
      <p>Type: {ingredients?.strType}</p>
      <h3>{ingredients?.strIngredient}</h3>
      
      <p>{ingredients?.strDescription}</p>
        </div>
    )
}
