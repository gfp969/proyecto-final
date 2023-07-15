import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {

    const dispatch = useDispatch();
    const { celebrities_list } = useSelector(state => state.cel);

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <h2>Listado de Favoritos</h2>
            </div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>Año de nacimiento</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Nacionalidad</th>
                        <th scope='col'>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {celebrities_list.map(c=>{
                        return(
                            <tr>
                                <td scope='row'>{c.birthday}</td>
                                <td scope='row'>{c.name}</td>
                                <td scope='row'>{c.nationality}</td>
                                <td scope='row'>{c.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Favorites;