import React from 'react'
import '../../App.css'

export default function ModalFavorite({show,name}) {

    return (
     <div className={show?'modalFavorite':'hidden'}>
               Добавлено в избранное "{name}"
     </div>
     )
}
