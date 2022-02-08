import React from "react";
import {Outlet} from "react-router-dom";

import css from "./PostsPage.module.css"
import AllPosts from "../../components/AllPosts/AllPosts";

const PostsPage = () => {
    return (
        <div className={css.posts}>
            <AllPosts/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
