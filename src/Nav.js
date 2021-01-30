import React from 'react'

export const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2" href="/#">DOMESTIKA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white fs-7 fw-bold " href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cursos
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link active text-white fs-7 fw-bold" aria-current="page" href="/#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                        <a className="" style={{width:40}} type="submit">
                        <a className="nav-link mt-2 badge bg-secondary text-white fs-7 fw-bold " style={{ height: 20, width: 40 }} href="/#">PRO</a>

                        </a>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link text-white fs-4 fw-bold" href="/#">···</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <a className="" style={{width:40}} type="submit">
                        <span className="material-icons mt-2" style={{color:'white',}}>shopping_cart</span>
                        </a>
                        <a className="nav-link active text-white fs-7 fw-bold" aria-current="page" href="/#">Entrar</a>      
                        <button className="btn btn-danger" style={{width:200, backgroundColor: 'red'}} type="submit">Crear cuenta</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
