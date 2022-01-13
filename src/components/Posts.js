import {useEffect, useState} from "react";

let allPosts = [];

export const MyPosts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })
    }, []);

    allPosts = posts;
    return allPosts;
};

export default function Posts(props) {

    let result = allPosts.filter(post => post.userId === props.id);

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