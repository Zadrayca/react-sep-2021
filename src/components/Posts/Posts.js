import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from "./Posts.module.css";
import {postService} from "../../services";
import Post from "../Post/Post";

const Posts = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, []);

    let userPosts = posts.filter(post => post.userId.toString() === id)

    return (
        <div className={css.bigBox}>
            {userPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export default Posts;