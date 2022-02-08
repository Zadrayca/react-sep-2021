import React from "react";
import {Link, useLocation} from "react-router-dom";

import css from "./PostDetails.module.css";

const PostDetails = () => {

    const {state} = useLocation();

    const {userId, id, title, body} = state;

    return (
        <div className={css.miniBox}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <Link to={'comments'} state={state}><button>Comments</button></Link>
        </div>
    );
};

export {PostDetails};
