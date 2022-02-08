import {Outlet} from "react-router-dom";

import css from "./Users.module.css"
import Users from "../../components/Users/Users";

const UsersPage = () => {

    return (
        <div className={css.users}>
            <Users/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};
