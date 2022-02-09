import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {photosService} from "../../services";
import css from "./Photos.module.css";
import {Photo} from "../Photo/Photo";

const Photos = () => {

    const {albumId} = useParams();
    console.log(albumId);
    console.log(useParams());

    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        photosService.getPhotosByAlbums(albumId).then(value => setPhotos(value))
    }, [albumId]);

    console.log(photos);

    return (
        <div className={css.bigBox}>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    )
};

export {Photos};
