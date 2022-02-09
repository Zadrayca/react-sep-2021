import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from "./Posts.module.css";
import {postService} from "../../services";
import Post from "../Post/Post";

const Posts = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(id).then(value => setPosts(value))
    }, [id]);

    return (
        <div className={css.bigBox}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export default Posts;