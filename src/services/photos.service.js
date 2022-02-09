import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const photosService = {
    getPhotosByAlbums: (id) => axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
}