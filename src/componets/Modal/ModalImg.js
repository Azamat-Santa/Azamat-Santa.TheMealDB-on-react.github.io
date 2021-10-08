import React from 'react'
import './modal.css'

export default function ModalImg({show,setShowImage,img}) {
    return (
        <div className={show?'modalImgWrapper':'modalImgWrapperBlock'} onClick={()=>setShowImage(false)}>
          <div className='modalImg' onClick={(e)=>e.stopPropagation()} >
            <div className='modalImgX' onClick={()=>setShowImage(false)}>+</div>
            <img src={img} alt="1" />

          </div>
            
        </div>
    )
}
