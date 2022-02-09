import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./AlbumsPage.module.css";
import {Albums} from "../../components/Albums/Albums";

const AlbumsPage = () => {
    return (
        <div className={css.details}>
            <Albums/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPage};
