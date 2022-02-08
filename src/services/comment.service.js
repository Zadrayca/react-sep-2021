import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const commentService = {
    getCommentsByPost: () => axiosService.get(urls.comments).then(value => value.data)
}