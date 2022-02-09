import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const albumsService = {
    getAlbumsByUser: (id) => axiosService.get(`${urls.albums}?userId=${id}`).then(value => value.data)
}