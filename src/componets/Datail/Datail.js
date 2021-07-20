import React from 'react'

import {getCocktailId} from '../../config.js/index'
import { Link } from 'react-router-dom';

export default function Datail(props) {


    const [cocktailById, setCocktailById] = React.useState();

    React.useEffect(() => {
      let id = props?.match.params.id;
      getDetail(id);
    },);
  
    const getDetail = async (id) => {
      const req = await fetch(getCocktailId+ id);
      const res = await req.json();
      
      setCocktailById(res.drinks[0]);
    };

    

    return (
        <div key={cocktailById?.idDrink} className='datailWrapper' >

          <div style={{width:'30vw',height:'40vh',marginTop:'20px',}}>
              <img style={{width:'100%',height:'100%'}} src={cocktailById?.strDrinkThumb} />
       
                 <div style={{fontWeight:'bold', textAlign:'center',color:'white',}}>{cocktailById?.strDrink}</div>

                 <div style={{color:'white'}}><span style={{fontWeight:'bold'}}>Instruction: </span>{cocktailById?.strInstructions}</div>
        <div style={{width:'100%',color:'white'}}>

              <div style={{fontWeight:'bold'}}>Ingredients:</div>
                  <Link style={{textDecoration:'none', color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient1}><div className='datailIngridient'>{cocktailById?.strIngredient1}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient2} ><div className='datailIngridient'>{cocktailById?.strIngredient2}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}   to={'/ingridient/' + cocktailById?.strIngredient3}><div className='datailIngridient'>{cocktailById?.strIngredient3}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}   to={'/ingridient/' + cocktailById?.strIngredient4}><div className='datailIngridient'>{cocktailById?.strIngredient4}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient5} ><div className='datailIngridient'>{cocktailById?.strIngredient5}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient6}><div className='datailIngridient'>{cocktailById?.strIngredient6}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient7} ><div className='datailIngridient'>{cocktailById?.strIngredient7}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient8}><div className='datailIngridient'>{cocktailById?.strIngredient8}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient9} ><div className='datailIngridient'>{cocktailById?.strIngredient9}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient10}><div className='datailIngridient'>{cocktailById?.strIngredient10}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient11}><div className='datailIngridient'>{cocktailById?.strIngredient11}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient12}><div className='datailIngridient'>{cocktailById?.strIngredient12}</div></Link>
                  <Link  style={{textDecoration:'none',color:'black'}} to={'/ingridient/' + cocktailById?.strIngredient13} ><div className='datailIngridient'>{cocktailById?.strIngredient13}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient14} ><div className='datailIngridient'>{cocktailById?.strIngredient14}</div></Link>
                  <Link style={{textDecoration:'none',color:'black'}}  to={'/ingridient/' + cocktailById?.strIngredient15} ><div className='datailIngridient'>{cocktailById?.strIngredient15}</div></Link>

        
       
        </div>
        
       </div>
        
         
            
        </div>
    )
}

