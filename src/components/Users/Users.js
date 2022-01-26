import css from "./Users.module.css";
import User from "../User/User";

const Users = ({users}) => {

    return (
        <div className={css.miniBox}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
