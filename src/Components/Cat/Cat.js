import React from "react";

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Cat};