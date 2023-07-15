import React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCel, setCel } from '../reducers/slices/celebritySlice';

const Celebrities_list = ({ celebrities }) => {
    const dispatch = useDispatch();
    const { celebrities_list } = useSelector(state => state.cel);

    function handleAdd(celid) {
        const celebrity = celebrities.find(c => c.birthday === celid);
        if (celebrities_list.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <h2> Lista de celebridades </h2>
            </div>
            <div>
                {celebrities.map(cel => {
                    return (
                        <Fragment>
                            <h4>{cel.name}</h4>
                            <h4>{cel.age}</h4>
                            <div>{cel.occupation}</div>
                            <button onClick={() => handleAdd(cel.birthday)} >Agregar a favoritos</button>
                        </Fragment>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Celebrities_list;