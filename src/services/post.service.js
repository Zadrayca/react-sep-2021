import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data),
    getAllPosts: () => axiosService.get(urls.posts).then(value => value.data)
}
