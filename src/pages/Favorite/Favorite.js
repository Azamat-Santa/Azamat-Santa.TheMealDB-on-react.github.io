
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import { removeFavoriteAct } from '../../Redux/reducer/favorite';

export default function Favorite() {


  const favorite = useSelector(state => state.mealReducer.favorite)
  const dispatch = useDispatch()
  const removeFavorite = (favorite) => {
    dispatch(removeFavoriteAct(favorite.id))
  }
  return (

    <>
      <div className='datailWrapper'>

        {favorite.length > 0
          ?
          favorite.map(favorite =>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={favorite.img} />
              <Card.Body>
                <Card.Title>{`${favorite.name.length > 18 ? `${favorite.name.substring(0, 18)}...` : favorite.name}`}</Card.Title>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <NavLink to={'/abouteMeal/' + favorite.name} >
                    <Button variant="primary"
                   
                    >
                    Подробнее

                    </Button>
                    </NavLink>
                <Button variant="primary" onClick={() => removeFavorite(favorite)}>Удалить</Button>
                </div>
                
              </Card.Body>
            </Card>
          )

          : <h2 style={{ textAlign: 'center', }}>избранных рецептов нет</h2>
        }

      </div>


    </>
  )
}
