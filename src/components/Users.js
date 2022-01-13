import {useEffect, useState} from "react";


export default function Users(props) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, []);

    let result = users.filter(user => user.id === props.id);
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