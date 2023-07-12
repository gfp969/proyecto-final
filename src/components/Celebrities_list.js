import React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Celebrities_list = ({ celebrities }) => {
    const dispatch = useDispatch();
    const { Celebrities_list } = useSelector(state => state.Celebrities_list);

    return (
        <Fragment>
            <div>
                <h2> Celebrities list </h2>
            </div>
            <div>
                {celebrities.map(cel => {
                    return (
                        <Fragment>
                            <h4>{cel.name}</h4>
                            <h4>{cel.age}</h4>
                            <div>{cel.occupation}</div>
                        </Fragment>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Celebrities_list;