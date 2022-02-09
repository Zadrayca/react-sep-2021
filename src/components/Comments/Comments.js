import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentService} from "../../services";
import css from "./Comments.module.css";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getCommentsByPost(id).then(value => setComments(value))
    }, [id]);

    return (
        <div className={css.bigBox}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export default Comments;
