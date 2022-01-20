import {useEffect, useState} from "react";

import css from './Posts.module.css'

import {postService} from "../../services/post.service";
import Post from "../Post/Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId).then(value => setPosts(value))
    }, [userId]);


    return (
        <div className={css.bigBox}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;