import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const commentService = {
    getCommentsByPost: (id) => axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}