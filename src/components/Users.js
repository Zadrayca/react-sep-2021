import {useEffect, useState} from "react";

export let allUsers = [];
export let propsArr = [];

export const MyUsers = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, []);

    allUsers = users;
    let botVar = 1;
    propsArr = [];
    allUsers.forEach(value => {
        propsArr.push({id: value.id, bot: botVar})
        botVar +=10;
    })

    return allUsers;
};

export default function Users(props) {

    let result = allUsers.filter(user => user.id === props.id);
    return (
        <div>
            <ul>
                {
                    result.map(value =>
                        <li key={value.id}>
                            name: {value.name}<br/>
                            username: {value.username}<br/>
                            email: {value.email}<br/>
                            Address:<br/>
                            street: {value.address.street}<br/>
                            suite: {value.address.suite}<br/>
                            city: {value.address.city}<br/>
                            zipcode: {value.address.zipcode}<br/>
                            Geo: <br/>
                            lat: {value.address.geo.lat}<br/>
                            lng: {value.address.geo.lng}<br/>
                            phone: {value.phone}<br/>
                            website: {value.website}<br/>
                            Company:<br/>
                            company name: {value.company.name}<br/>
                            company catchPhrase: {value.company.catchPhrase}<br/>
                            company bs: {value.company.bs}
                        </li>)
                }
            </ul>
        </div>
    )

}