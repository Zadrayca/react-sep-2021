import React from "react";
import {Outlet} from "react-router-dom";

import css from "./Layout.module.css"
import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                @Homework 3
            </div>
        </div>
    );
};

export {Layout};
