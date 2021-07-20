import React from 'react'
import '../../App.css'
export default function SEARCH(props) {
    // send,changeName,name
    return (
        <form onSubmit={props.send} style={{textAlign:'center',width:'100%',paddingTop:'30px'}}>
         <div style={{display:'flex',justifyContent:'center'}}>
         <input
                value={props.name}
                placeholder='enter name on githab'
                onChange={(e)=>props.changeName(e.target.value)}
                className="searchInput"
            
            />
        <div className="searchBtn"> search</div>


         </div>
            
        </form>
    )
}