import css from'./App.module.css';

import Users from "./components/Users/Users";
import UserDetails from "./components/UsersDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {useState} from "react";

function App() {

    const [user, setUser] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const [userId, setUserId] = useState(null);

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div>
            <div className={css.bigBox}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    )

}

export default App;