import React from "react";
import {Outlet} from "react-router-dom";

import css from "./UserDetails.module.css";
import UserDetails from "../../components/UsersDetails/UserDetails";

const UserDetailsPage = () => {

    return (
        <div className={css.details}>
            <UserDetails/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetailsPage};
