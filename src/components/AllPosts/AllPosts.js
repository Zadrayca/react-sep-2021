import {useEffect, useState} from "react";

import css from "./AllPosts.module.css";
import {postService} from "../../services";
import AllPost from "../AllPost/AllPost";


const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, []);



    return (
        <div className={css.bigBox}>
            {posts.map(post => <AllPost key={post.id} post={post}/>)}
        </div>
    );
};

export default AllPosts;