import {useEffect, useState} from "react";


export default function Posts(props) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })

    }, []);

    let result = posts.filter(post => post.userId === props.id);

    return (
        <div>
            <div>{result.map(value =>
                <div key={value.id}>
                    id: {value.id}<br/>
                    title: {value.title}<br/>
                </div>
            )}
            </div>

        </div>
    )
}