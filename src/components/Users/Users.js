import {useEffect, useState} from "react";

import css from "./Users.module.css";
import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div className={css.miniBox}>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;
