import React from 'react'

export const Curso = (cur) => {
    return (
        <>
            <div className="card" style={{width: 300, }} >
                <img className="card-img-top" style={{height: 200}} src={cur.url} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{cur.nombreCurso}</h5>
                <p className="card-text">Un curso de {cur.nombreAutor}</p>
                <p className="card-text text-truncate" style={{color: 'gray', height:40}}>{cur.descripcion}</p>
                <p className="card-text" style={{color: 'gray'}}><i className="material-icons" >perm_identity</i>{cur.cantAlumnos} <i className="material-icons" style={{marginLeft:30}}>thumb_up</i> {cur.cantLikes}</p>
                <button type="button" className="btn btn-danger btn-sm " style={{color: 'white', width:75, height:30, fontSize:13}}>REBAJAS</button>
                <p className="card-text mb-0" style={{color: 'red', fontSize:15}}>{cur.descuentoPrecio}</p>
                <button type="button" className="btn btn-info btn-sm" style={{color: 'white', width:100}}>{cur.precioTotal}</button>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}
