import {useState, useEffect} from "react";

import css from "./App.module.css";
import Users from "./components/Users/Users";
import Form from "./components/Form/Forms";
import {userService} from "./services/user.service";

function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, []);

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilteredUsers(filterArr);
    }

    return (
        <div className={css.bigBox}>
            <div className={css.miniBox}><Form getFilter={getFilter}/></div>
            <div className={css.miniBox}><Users users={filteredUsers}/></div>
        </div>
    )
}

export default App;