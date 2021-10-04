import React from 'react'
import '../../App.css'

export default function ModalFavorite({show,name}) {
    console.log(name);
    return (
     <div className={show?'modalFavorite':'hidden'}>
      Блюдо: "{name}" добавлено в избранное
     </div>
     )
}
