import React, { useState } from 'react'
import { getMealCategorieName } from '../../config/index'
import { NavLink } from 'react-router-dom';
import "../../App.css"
import heartRed from '../../img/heartRed.svg'
import { useDispatch} from 'react-redux';
import { addFavorite } from '../../Redux/reducer/favorite';
import ModalFavorite from './../Modal/ModalFavorite';
import { Card, Button } from 'react-bootstrap';
import loaderImg from '../../img/loaderImage.gif'





export default function Datail(props) {


  const [mealsCategorie, setMealsCategorie] = React.useState();
  const [show, setShow] = useState(false)
  const [nameFavorite, setNameFavorite] = useState()



  React.useEffect(() => {
    const categorieName = props?.match.params.categorieName;
    getDetail(categorieName);
  },[props]);




  const dispatch = useDispatch()

  



  // ......................

  const addFavoriteMeal = (name, mealsId, mealsImg) => {
    const customers = {
      name,
      img: mealsImg,
      id: mealsId,

    }
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000);
    setNameFavorite(name)
    dispatch(addFavorite(customers))
  }
  const getDetail = async (categorieName) => {
    const req = await fetch(getMealCategorieName + categorieName);
    const res = await req.json();
    setMealsCategorie(res.meals);
    console.log(res.meals);
  };



// debug


  return (
    <>
      <div className='datailWrapper' >
        <ModalFavorite show={show} setShow={setShow} name={nameFavorite} />




        {mealsCategorie ? mealsCategorie.map((el, index) => {
          return (

            



              <Card style={{ width: '18rem' }} key={el.idMeal}>
                <Card.Img variant="top" src={el.strMealThumb?el.strMealThumb:loaderImg} /> 
                <Card.Body>
                  <Card.Title>{`${el.strMeal.length > 18 ? `${el.strMeal.substring(0, 18)}...` : el.strMeal}`}</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <NavLink to={'/abouteMeal/' + el.strMeal} >
                    <Button variant="primary"
                   
                    >
                    Подробнее

                    </Button>
                    </NavLink>
                    <img src={heartRed} alt="" style={{ zIndex: '10',cursor:'pointer', }}   
                    onClick={() => addFavoriteMeal(el.strMeal, el.idMeal, el.strMealThumb,)}
                     />
                  </div>


                </Card.Body>
              </Card>



            



          )
        })




          : <div style={{height:'80vh'}}><div className="lds-ripple"><div></div><div></div></div></div>}




      </div>

      
      
    </>
  )
}

