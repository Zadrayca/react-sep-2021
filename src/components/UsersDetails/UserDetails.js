import css from './UserDetails.module.css'

const UserDetails = ({user, getUserId}) => {

    const {id, name, username, email, address: {street, suite, city, zipcode, geo}, phone, website, company} = user;

    return (
        <div className={css.miniBox}>
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>email: {email}</li>
                    <li>address:
                        <ul>
                            <li>street: {street}</li>
                            <li>suite: {suite}</li>
                            <li>city: {city}</li>
                            <li>zipcode: {zipcode}</li>
                            <li>geo:
                                <ul>
                                    <li>lat: {geo.lat}</li>
                                    <li>lng: {geo.lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>phone: {phone}</li>
                    <li>website: {website}</li>
                    <li>company:
                        <ul>
                            <li>name: {company.name}</li>
                            <li>catchPhrase: {company.catchPhrase}</li>
                            <li>bs: {company.bs}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;