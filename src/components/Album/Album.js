import React from "react";
import {Link} from "react-router-dom";

import css from "./Album.module.css";

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={css.miniBox}>
            <div>UserId: {userId} | Id: {id} | Title: {title}</div>
            <Link to={`${id.toString()}/photos`} state={album}><button>Photos</button></Link>
        </div>
    );
};

export {Album};
