import React , { useEffect, useState } from 'react'

export const Menu = ( props ) => {

    return (
        <div>
            <div style={{ padding: 50, fontSize: 15}}>
            <p>{props.titulo}</p>
            <hr/>
            {
               props.item.map(
                   i => i === 'Domestika Basics' ? 
                   <a href="/#" style={{textDecoration:'none', color:'black'}}>{i}
                   <button type="button" className="btn-info " style={{ border:40, borderRadius:5, textAlign:'center', color: 'white', width:50, height:20, fontSize:10, fontWeight:'bold', }}>NUEVO</button>
                   <br/>
                   </a> 
                   :
                    <a href="/#" style={{textDecoration:'none', color:'black'}}>{i}<br/></a>
               )      
            }
            </div>
        </div>
    )
}
