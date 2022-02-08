import {Link} from "react-router-dom";

import css from "./AllPost.module.css";

const AllPost = ({post}) => {

    const {userId, id, title} = post;

    return (
        <div className={css.miniBox}>
            <Link to={id.toString()} state={post}>userId: {userId} id: {id} title: {title}</Link>
        </div>
    );
};

export default AllPost;