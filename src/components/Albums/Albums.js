import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {albumsService} from "../../services";
import css from "./Albums.module.css";
import {Album} from "../Album/Album";

const Albums = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAlbumsByUser(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div className={css.miniBox1}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};
