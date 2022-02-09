import {Link} from "react-router-dom";

import css from "./User.module.css";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <div><Link to={id.toString()} state={user}>{id}) {name}</Link></div>
            <div><Link to={`${id.toString()}/albums`} state={user}><button>Albums</button></Link></div>
        </div>
    );
};

export default User;