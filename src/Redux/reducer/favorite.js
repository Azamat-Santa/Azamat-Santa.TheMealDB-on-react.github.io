const defaultState ={
    favorite:[]
}

const ADD_FAVORITE='ADD_FAVORITE'
const REMOVE_FAVORITE='REMOVE_FAVORITE'
// const MANY_USERS='MANY_USERS'

export const mealReducer=(state=defaultState,action)=>{
    switch(action.type){ 

   

    case ADD_FAVORITE:
     return{...state, favorite:[...state.favorite,action.payload]}
     
     case REMOVE_FAVORITE:
      return{...state, favorite:state.favorite.filter(filterItem=>filterItem.id !== action.payload)}
  
      default:
      return state
    }
  }

  export const addFavorite = (payload)=>({type:ADD_FAVORITE,payload})
  export const removeFavoriteAct = (payload)=>({type:REMOVE_FAVORITE,payload})
//   export const asynkCastomers=(payload)=>({type:MANY_USERS,payload})