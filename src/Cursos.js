import React, { useEffect, useState } from 'react'

import { Curso } from './Curso'
import { Menu } from './Menu'

export const Cursos = () => {

    const [ cursos, setCursos ] = useState([])

    useEffect( () => {
        fetch("data.json")
        .then(response => response.json())
        .then(datos => {
            setCursos(datos)
        })
    }, [] )


    return ( <> 
                    {
                    cursos.length === 0 ? <div>no hay datos</div> : <div >
                        <div className="row">
                            <div className="col-md-3">
                                <Menu item={cursos.tipoCursos} />
                                <Menu item={cursos.otrosCursos} />
                                <Menu item={cursos.CATEGORÍAS} titulo="CATEGORÍAS"/>
                                <Menu item={cursos.ÁREAS} titulo="ÁREAS"/>
                                <Menu item={cursos.SOFTWARE} titulo="SOFTWARE"/>
                                

                            </div>
                            <div className="col-md-9">
                            <br/>
                            <h1>Cursos populares</h1>
                            <hr/>
                            <br/>
                                <div className="card-columns" style={{columnCount:3}}>
                                    {
                                        cursos.cursos.map( cur => 
                                            <Curso {...cur} key={cur.id}/>
                                            
                                        )
                                    }
                                </div>
                             </div>
                        </div>
                        </div>
                    } 
        </>
    )
}
