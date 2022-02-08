import React from "react";
import {Outlet} from "react-router-dom";

import css from "./PostDetails.module.css"
import {PostDetails} from "../../components/PostDetails/PostDetails";

const PostDetailsPage = () => {
    return (
        <div className={css.details}>
            <PostDetails/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostDetailsPage};
