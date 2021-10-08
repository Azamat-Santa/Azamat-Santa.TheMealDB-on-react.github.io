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
import ModalImg from '../Modal/ModalImg';
import Loader from './../Loader/Loader';



export default function Datail(props) {
  const [mealsCategorie, setMealsCategorie] = React.useState();
  const [show, setShow] = useState(false)
  const [nameFavorite, setNameFavorite] = useState()
  const [img, setImg] = useState()
  const [showImage,setShowImage]=useState(false)
  React.useEffect(() => {
    const categorieName = props?.match.params.categorieName;
    getDetail(categorieName);
  },[props]);
  const dispatch = useDispatch()
  // ......................

  const addFavoriteMeal = (name, mealsId, mealsImg) => {
    const customers =[ {
      name,
      img: mealsImg,
      id: mealsId,

    }]
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3500);
    setNameFavorite(name)
    dispatch(addFavorite(customers))
  }
  const getDetail = async (categorieName) => {
    const req = await fetch(getMealCategorieName + categorieName);
    const res = await req.json();
    setMealsCategorie(res.meals);
  
  };

  const showModalImg=(img)=>{
    setShowImage(true)
    setImg(img)
    
  }
  return (
    <>
      <div className='datailWrapper' >
        <ModalFavorite 
        show={show} 
        setShow={setShow}
         name={nameFavorite} />
        <ModalImg
         show ={showImage} 
         setShowImage={setShowImage} 
         img={img}/>
        {mealsCategorie 
        ? 
        mealsCategorie.map((el, index) => {
          return (
              <Card style={{ width: '18rem' }} key={el.idMeal}>
                <Card.Img variant="top" 
                src={el.strMealThumb?el.strMealThumb:loaderImg} 
                onClick={()=>showModalImg(el.strMealThumb)} 
                style={{cursor:'pointer'}}

                /> 
                <Card.Body>
                  <Card.Title>
                  {`${el.strMeal.length > 18 ? `${el.strMeal.substring(0, 18)}...` : el.strMeal}`}
                  </Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <NavLink to={'/abouteMeal/' + el.strMeal} >
                    <Button variant="primary"
                   
                    >
                    Подробнее

                    </Button>
                    </NavLink>
                    <img src={heartRed} alt="" 
                    style={{ zIndex: '9',cursor:'pointer', }}   
                    onClick={() => addFavoriteMeal(el.strMeal, el.idMeal, el.strMealThumb,)}
                     />
                  </div>
                </Card.Body>
              </Card>
          )
        })
          :<Loader/>}
         
      </div>
      
    </>
  )
}

