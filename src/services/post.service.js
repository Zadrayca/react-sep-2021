import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data),
    getAllPosts: () => axiosService.get(urls.posts).then(value => value.data)
}


// export const allPostService = {
//     getAllPosts: () => axiosService.get((urls.users).then(value => value.data))
//     axiosService.get(urls.users).then(value => value.data)
// }